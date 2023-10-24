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
import { INFO_REGISTRERING } from '../Constants/constants'

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
      <Header content="Registrer udlæg" />
      <form onSubmit={handleSubmit}>
        <Grid
          container
          spacing={3}>
          <Grid
            item
            xs={12}>
            <TextField
              fullWidth
              label="Bilagsdato"
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
              label="Beløb i DKK"
              value={amount}
              onChange={handleAmountChange}
              error={isNotNumber}
              helperText={isNotNumber ? 'Indtast venligst et tal' : ''}
            />
          </Grid>
          <Grid
            item
            xs={12}>
            <TextField
              fullWidth
              label="Kommentar"
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
              Registrer
            </Button>
            <Tooltip
              title="Sådan bruger du appen"
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
        <DialogTitle>Dit udlæg er registreret</DialogTitle>
        <Button onClick={handleModalClose}>Luk</Button>
      </Dialog>
      <Dialog
        open={infoDialogOpen}
        onClose={handleInfoDialogClose}>
        <DialogTitle>{INFO_REGISTRERING.title}</DialogTitle>
        <DialogContent>
          {INFO_REGISTRERING.contents.map((content, index) => (
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
