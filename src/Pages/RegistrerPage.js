import {
  Container,
  TextField,
  Button,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  IconButton,
  Tooltip,
} from '@mui/material'
import InfoIcon from '@mui/icons-material/Info'
import { UploadButton } from '../Components/UploadButton'
import { useAppContext } from '../Context/AppContext'
import { Header } from '../Components/Header'
import { AccountMenu } from '../Components/AccountMenu'
import { TEXT } from '../Constants/constants'

export const RegistrerPage = () => {
  const {
    handleSubmit,
    isModalOpen,
    handleDateChange,
    handleDescriptionChange,
    date,
    amount,
    description,
    handleModalClose,
    isNotNumber,
    handleAmountChange,
    infoDialogOpen,
    handleInfoDialogOpen,
    handleInfoDialogClose,
  } = useAppContext()

  return (
    <Container
      maxWidth="sm"
      sx={{ position: 'relative' }}>
      <AccountMenu />
      <Header content={TEXT.registrer_page_header} />
      <form onSubmit={handleSubmit}>
        <Grid
          container
          spacing={3}>
          <Grid
            item
            xs={12}>
            <TextField
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
              error={isNotNumber}
              helperText={isNotNumber ? TEXT.input_number : ''}
            />
          </Grid>
          <Grid
            item
            xs={12}>
            <TextField
              fullWidth
              label={TEXT.commentary}
              value={description}
              onChange={handleDescriptionChange}
            />
          </Grid>
          <Grid
            item
            xs={12}>
            <UploadButton />
          </Grid>
          <Grid
            item
            xs={12}
            container
            alignItems="center">
            <Button
              variant="contained"
              color="primary"
              type="submit">
              {TEXT.submit_expense}
            </Button>
            <Tooltip
              title={TEXT.how_to_use}
              sx={{ ml: 1 }}>
              <IconButton
                size={'medium'}
                onClick={handleInfoDialogOpen}>
                <InfoIcon />
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
      </form>
      <Dialog
        open={isModalOpen}
        onClose={handleModalClose}>
        <DialogTitle>{TEXT.expense_submitted}</DialogTitle>
        <Button onClick={handleModalClose}>{TEXT.close}</Button>
      </Dialog>
      <Dialog
        open={infoDialogOpen}
        onClose={handleInfoDialogClose}>
        <DialogTitle>{TEXT.registrer_modal_title}</DialogTitle>
        <DialogContent>
          {TEXT.registrer_modal_info.map((content, index) => (
            <DialogContentText key={index}>{content}</DialogContentText>
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleInfoDialogClose}>Luk</Button>
        </DialogActions>
      </Dialog>
    </Container>
  )
}
