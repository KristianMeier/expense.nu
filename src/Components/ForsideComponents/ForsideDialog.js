import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material'
import emailjs from 'emailjs-com'
import { useEmailContext } from '../../Context/EmailContext'
import { TEXT } from '../../Constants/constants'

emailjs.init('user_8HEIx6CnEORghk_fMdGcv')

export const ForsideDialog = () => {
  const { dialogOpen, dialogMessage, dialogTitle, handleCloseDialog } =
    useEmailContext()

  return (
    <Dialog
      open={dialogOpen}
      onClose={handleCloseDialog}>
      <DialogTitle>{dialogTitle}</DialogTitle>
      <DialogContent>
        <DialogContentText>{dialogMessage}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleCloseDialog}
          color="primary"
          autoFocus>
          {TEXT.button_ok}
        </Button>
      </DialogActions>
    </Dialog>
  )
}
