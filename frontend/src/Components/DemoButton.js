import { useState } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogActions from '@mui/material/DialogActions'
import { useAppContext } from '../Context/AppContext'

//
// NOTE USED
//

export const DemoButton = () => {
  const [open, setOpen] = useState(false)
  const { resetData } = useAppContext()

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    resetData()
    setOpen(false)
  }

  return (
    <div>
      <Button
        variant="contained"
        onClick={handleClickOpen}>
        Indsend Udlæg
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}>
        <DialogTitle>Registrering</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Dit udlæg er blevet registreret. Tak.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Luk</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
