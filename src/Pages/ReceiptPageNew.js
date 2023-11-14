import {
  Container,
  TextField,
  Button,
  Grid,
  MenuItem,
  Dialog,
  DialogTitle,
  Typography,
  Box,
} from '@mui/material'
import { useLanguageContext } from '../Context/LanguageContext'
import emailjs from 'emailjs-com'
import { useState } from 'react'
import { getCurrentDate } from '../utils/getCurrentDate'
import { CloudUpload } from '@mui/icons-material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { green } from '@mui/material/colors'
// import imageCompression from 'browser-image-compression'

emailjs.init('user_8HEIx6CnEORghk_fMdGcv')

export const ReceiptPageNew = () => {
  const { TEXT } = useLanguageContext()
  const [amount, setAmount] = useState(0)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  const [receipt, setReceipt] = useState(null)
  const [date, setDate] = useState(getCurrentDate())
  const [placeholderReceipt, setPlaceholderReceipt] = useState(TEXT.no_file)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false)

  const isNoReceiptUploaded = receipt === null

  const handleAmountChange = (e) => {
    setAmount(e.target.value)
  }

  const handleDateChange = (e) => {
    setDate(e.target.value)
  }

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleCategoryChange = (e) => {
    setCategory(e.target.value)
  }

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleReciptUpload = async (e) => {
    const file = e.target.files[0]
    const placeHolderFileName = file.name
    setPlaceholderReceipt(placeHolderFileName)
    setReceipt(file)
  }

  const handleRequestDemo = () => {
    const bookkeeperEmail = 'kristiankassoemeier@gmail.com'

    const templateParams = {
      recipients: `${bookkeeperEmail}, ${email}`,
      date: date,
      name: name,
      amount: amount,
      email: email,
      category: category,
      description: description,
      receipt: placeholderReceipt,
    }

    emailjs
      .send(
        'service_qeoz2v8',
        'template_jyhtxjp',
        templateParams,
        'vewCrKxqS5W_lq7BU'
      )
      .then(
        (response) => console.log('Email successfully sent!', response),
        (error) => console.log('Failed to send email:', error)
      )
  }

  const resetData = () => {
    setDate(getCurrentDate())
    setCategory('')
    setAmount('')
    setDescription('')
    setReceipt(null)
    setName('')
    setEmail('')
  }

  const handleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  const handleAlertModal = () => {
    setIsAlertModalOpen(!isAlertModalOpen)
  }

  return (
    <Container
      maxWidth="sm"
      sx={{ position: 'relative' }}>
      <Typography
        component="h2"
        variant="h5"
        color="primary"
        gutterBottom
        sx={{
          mb: 3,
        }}>
        {TEXT.receipt_title}
      </Typography>
      <Grid
        container
        spacing={3}>
        <Grid
          item
          xs={12}>
          <TextField
            required
            fullWidth
            label={TEXT.name}
            value={name}
            onChange={handleNameChange}
          />
        </Grid>
        <Grid
          item
          xs={12}>
          <TextField
            required
            fullWidth
            label={TEXT.email}
            value={email}
            onChange={handleEmailChange}
          />
        </Grid>
        <Grid
          item
          xs={12}>
          <TextField
            required
            fullWidth
            label={TEXT.receipt_date}
            type="date"
            value={date}
            onChange={handleDateChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}>
          <TextField
            fullWidth
            required
            type="number"
            label={TEXT.receipt_amount}
            value={amount}
            onChange={handleAmountChange}
          />
        </Grid>
        <Grid
          item
          xs={12}>
          <TextField
            select
            fullWidth
            required
            label={TEXT.category}
            value={category}
            onChange={handleCategoryChange}>
            {TEXT.categories.map((item) => (
              <MenuItem
                key={item}
                value={item}>
                {item}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid
          item
          xs={12}>
          <TextField
            required
            fullWidth
            label={TEXT.commentary}
            value={description}
            onChange={handleDescriptionChange}
          />
        </Grid>
        <Grid
          item
          xs={12}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}>
            <Button
              variant="outlined"
              component="label"
              style={{
                borderColor: receipt ? green[500] : undefined,
                color: receipt ? green[500] : undefined,
              }}>
              {receipt ? (
                <CheckCircleIcon
                  style={{ color: green[500], marginRight: '10px' }}
                />
              ) : (
                <CloudUpload style={{ marginRight: '10px' }} />
              )}
              {receipt
                ? TEXT.registrer_button_uploaded
                : TEXT.registrer_button_not_uploaded}
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={handleReciptUpload}
              />
            </Button>
            {isNoReceiptUploaded && (
              <Typography
                variant="subtitle1"
                color="textSecondary"
                sx={{
                  fontStyle: 'italic',
                  color: 'secondary',
                }}>
                {TEXT.no_file}
              </Typography>
            )}
          </Box>
        </Grid>
        <Grid
          item
          xs={12}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={() => {
              if (
                !name ||
                !email ||
                !date ||
                !amount ||
                !category ||
                !description ||
                !receipt
              ) {
                handleAlertModal()
                return
              }
              handleRequestDemo()
              handleModal()
            }}>
            {TEXT.submit_expense}
          </Button>
        </Grid>
      </Grid>
      <Dialog
        open={isAlertModalOpen}
        onClose={handleAlertModal}>
        <DialogTitle>{TEXT.fill_all_fields}</DialogTitle>
        <Button
          onClick={() => {
            handleAlertModal()
          }}>
          {TEXT.close}
        </Button>
      </Dialog>
      <Dialog
        open={isModalOpen}
        onClose={handleModal}>
        <DialogTitle>{TEXT.expense_submitted}</DialogTitle>
        <Button
          onClick={() => {
            handleModal()
            resetData()
          }}>
          {TEXT.close}
        </Button>
      </Dialog>
    </Container>
  )
}
