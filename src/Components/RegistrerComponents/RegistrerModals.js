import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@mui/material'
import { useAppContext } from '../../Context/AppContext'
import { useLanguageContext } from '../../Context/LanguageContext'

export const RegistrerDialogs = () => {
  const {
    isModalOpen,
    handleModalClose,
    infoDialogOpen,
    handleInfoDialogClose,
  } = useAppContext()
  const { TEXT } = useLanguageContext()

  return (
    <>
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
    </>
  )
}
