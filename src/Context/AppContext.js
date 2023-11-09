import { createContext, useContext, useState } from 'react'
import { getCurrentDate } from '../utils/getCurrentDate'

const AppContext = createContext()

export const AppContextProvider = ({ children }) => {
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  const [receipt, setReceipt] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [date, setDate] = useState(getCurrentDate())
  const [isNotNumber, setIsNotNumber] = useState(false)
  const [infoDialogOpen, setInfoDialogOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

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
      category: category,
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

  const changeLoginStatus = () => {
    setIsLoggedIn(!isLoggedIn)
  }

  const handleInfoDialogClose = () => {
    setInfoDialogOpen(false)
  }

  const resetData = () => {
    setDate(getCurrentDate())
    setCategory('')
    setAmount('')
    setDescription('')
    setReceipt(null)
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

  const handleCategoryChange = (e) => {
    setCategory(e.target.value)
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
        handleAmountChange,
        handleCategoryChange,
        handleDescriptionChange,
        handleModalClose,
        handleReciptUpload,
        resetData,
        receipt,
        isModalOpen,
        date,
        amount,
        category,
        description,
        isNotNumber,
        infoDialogOpen,
        handleInfoDialogOpen,
        handleInfoDialogClose,
        isLoggedIn,
        changeLoginStatus,
      }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)
