import { createContext, useContext, useState } from 'react'
import { getCurrentDate } from '../utils/getCurrentDate'

const AppContext = createContext()

export const AppContextProvider = ({ children }) => {
  const [amount, setAmount] = useState('')
  const [description, setDescription] = useState('')
  const [receipt, setReceipt] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [date, setDate] = useState(getCurrentDate())
  const [isNotNumber, setIsNotNumber] = useState(false)
  const [infoDialogOpen, setInfoDialogOpen] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (isNaN(amount) || amount === '') {
      setIsNotNumber(true)
      return
    } else {
      setIsNotNumber(false)
    }

    const formData = {
      date: date,
      amount: amount,
      description: description,
      receipt: 'demo_image.jpg',
    }

    const existingData = localStorage.getItem('formData')

    let existingReceipts = []
    try {
      existingReceipts = existingData ? JSON.parse(existingData) : []
    } catch (error) {
      console.error('Error parsing data from localStorage:', error)
    }

    const updatedReceipts = [...existingReceipts, formData]

    localStorage.setItem('formData', JSON.stringify(updatedReceipts))
    resetData()
    setIsModalOpen(true)
  }

  const handleInfoDialogOpen = () => {
    setInfoDialogOpen(true)
  }

  const handleInfoDialogClose = () => {
    setInfoDialogOpen(false)
  }

  const resetData = () => {
    setAmount('')
    setDescription('')
    setReceipt(null)
    setDate(getCurrentDate())
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
  }

  const handleAmountChange = (e) => {
    const value = e.target.value

    if (isNaN(value)) {
      setIsNotNumber(true)
    } else {
      setIsNotNumber(false)
      setAmount(value)
    }
  }

  const handleDateChange = (e) => {
    setDate(e.target.value)
  }

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value)
  }

  const handleReciptUpload = (e) => {
    setReceipt(e.target.files[0])
  }

  return (
    <AppContext.Provider
      value={{
        handleSubmit,
        handleDateChange,
        handleDescriptionChange,
        handleModalClose,
        handleAmountChange,
        handleReciptUpload,
        resetData,
        receipt,
        isModalOpen,
        date,
        amount,
        description,
        isNotNumber,
        infoDialogOpen,
        handleInfoDialogOpen,
        handleInfoDialogClose,
      }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)
