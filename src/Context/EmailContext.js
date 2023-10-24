import { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import emailjs from 'emailjs-com'
import { NAVIGATION } from '../Constants/constants'

const EmailContext = createContext()

export const EmailContextProvider = ({ children }) => {
  const [email, setEmail] = useState('')
  const [dialogOpen, setDialogOpen] = useState(false)
  const [dialogMessage, setDialogMessage] = useState('')
  const [dialogTitle, setDialogTitle] = useState('')

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handleRequestDemo = () => {
    const templateParams = {
      to_email: 'kristiankassoemeier@gmail.com',
      customer_email: email,
    }

    emailjs
      .send(
        'service_qeoz2v8',
        'template_jyhtxjp',
        templateParams,
        'vewCrKxqS5W_lq7BU'
      )
      .then(
        (response) => {
          console.log('Email successfully sent!', response)
          setDialogTitle('Tjek din email')
          setDialogMessage('Vi har sendt loginoplysninger til dig på din email')
          setDialogOpen(true)
        },
        (error) => {
          console.log('Failed to send email:', error)
          setDialogTitle('Der opstod en fejl')
          setDialogMessage('Kontakt os på test@test.dk')
          setDialogOpen(true)
        }
      )
  }

  const handleCloseDialog = () => {
    setDialogOpen(false)
    setEmail('')
  }

  return (
    <EmailContext.Provider
      value={{
        email,
        dialogOpen,
        dialogMessage,
        dialogTitle,
        handleEmailChange,
        handleRequestDemo,
        handleCloseDialog,
      }}>
      {children}
    </EmailContext.Provider>
  )
}

export const useEmailContext = () => useContext(EmailContext)
