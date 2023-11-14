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
import { CloudUpload } from '@mui/icons-material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { green } from '@mui/material/colors'

emailjs.init('user_8HEIx6CnEORghk_fMdGcv')

export const ReceiptPageNew = () => {
  const { TEXT } = useLanguageContext()
  const [formData, setFormData] = useState({
    amount: '',
    name: '',
    email: '',
    category: '',
    description: '',
    receipt: null,
    date: '',
    placeholderReceipt: TEXT.no_file,
  })
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleReciptUpload = async (e) => {
    const file = e.target.files[0]
    const placeHolderFileName = file.name
    setFormData({
      ...formData,
      receipt: placeHolderFileName,
    })
  }

  const handleRequestDemo = () => {
    const bookkeeperEmail = 'kristiankassoemeier@gmail.com'
    const templateParams = {
      ...formData,
      recipients: `${bookkeeperEmail}, ${formData.email}`,
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
    setFormData({
      amount: '',
      name: '',
      email: '',
      category: '',
      description: '',
      receipt: null,
      date: '',
      placeholderReceipt: TEXT.no_file,
    })
  }

  const handleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  const handleAlertModal = () => {
    setIsAlertModalOpen(!isAlertModalOpen)
  }

  const isNoReceiptUploaded = formData.receipt === null

  return (
    <Container
      maxWidth="sm"
      sx={{ position: 'relative' }}>
      <Typography
        component="h2"
        variant="h5"
        color="primary"
        gutterBottom
        sx={{ mb: 3 }}>
        {TEXT.receipt_title}
      </Typography>

      <Grid
        container
        spacing={3}>
        <Grid
          item
          xs={12}>
          <TextField
            name="name"
            required
            fullWidth
            label={TEXT.name}
            value={formData.name}
            onChange={handleChange}
          />
        </Grid>
        <Grid
          item
          xs={12}>
          <TextField
            name="email"
            required
            fullWidth
            label={TEXT.email}
            value={formData.email}
            onChange={handleChange}
          />
        </Grid>
        <Grid
          item
          xs={12}>
          <TextField
            name="date"
            required
            fullWidth
            label={TEXT.receipt_date}
            type="date"
            value={formData.date}
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}>
          <TextField
            name="amount"
            fullWidth
            required
            type="number"
            label={TEXT.receipt_amount}
            value={formData.amount}
            onChange={handleChange}
          />
        </Grid>
        <Grid
          item
          xs={12}>
          <TextField
            name="category"
            select
            fullWidth
            required
            label={TEXT.category}
            value={formData.category}
            onChange={handleChange}>
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
            name="description"
            required
            fullWidth
            label={TEXT.commentary}
            value={formData.description}
            onChange={handleChange}
          />
        </Grid>
        <Grid
          item
          xs={12}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button
              variant="outlined"
              component="label"
              style={{
                borderColor: formData.receipt ? green[500] : undefined,
                color: formData.receipt ? green[500] : undefined,
              }}>
              {formData.receipt ? (
                <CheckCircleIcon
                  style={{ color: green[500], marginRight: '10px' }}
                />
              ) : (
                <CloudUpload style={{ marginRight: '10px' }} />
              )}
              {formData.receipt
                ? TEXT.registrer_button_uploaded
                : TEXT.registrer_button_not_uploaded}
              <input
                name="receipt"
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
                  paddingLeft: 1.5,
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
                !formData.name ||
                !formData.email ||
                !formData.date ||
                !formData.amount ||
                !formData.category ||
                !formData.description ||
                !formData.receipt
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
