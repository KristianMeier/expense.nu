import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material'
import emailjs from 'emailjs-com'
import { useEmailContext } from '../../../Context/EmailContext'
import { useLanguageContext } from '../../../Context/LanguageContext'

emailjs.init('user_8HEIx6CnEORghk_fMdGcv')

export const ForsideDialog = () => {
  const { dialogOpen, dialogMessage, dialogTitle, handleCloseDialog } =
    useEmailContext()
  const { TEXT } = useLanguageContext()

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
