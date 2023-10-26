import {
  Container,
  TextField,
  Button,
  Grid,
  IconButton,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@mui/material'
import InfoIcon from '@mui/icons-material/Info'
import { useState } from 'react'
import { useLanguageContext } from '../../Context/LanguageContext'
import { Title } from '../Title'

export const CreateUserPageOld = () => {
  const [infoCreateUserDialogOpen, setCreateUserInfoDialogOpen] =
    useState(false)
  const [isCreateUserModalOpen, setIsCreateUserModalOpen] = useState(false)
  const { TEXT } = useLanguageContext()

  const handleCreateUserInfoDialogOpen = () => {
    setCreateUserInfoDialogOpen(true)
  }

  const handleCreateUserInfoDialogClose = () => {
    setCreateUserInfoDialogOpen(false)
  }

  const handleCreateUserModalClose = () => {
    setIsCreateUserModalOpen(false)
  }

  const handleCreateUserSubmit = (e) => {
    e.preventDefault()
    setIsCreateUserModalOpen(true)
  }

  return (
    <Container
      maxWidth="sm"
      sx={{ position: 'relative' }}>
      <Title>{TEXT.create_user_title}</Title>
      <form onSubmit={handleCreateUserSubmit}>
        <Grid
          container
          spacing={3}>
          <Grid
            item
            xs={12}>
            <TextField
              fullWidth
              required
              label={TEXT.driving_date}
              value="2021-01-01"
              type="date"
              onChange={() => console.log('hej')}
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
              label={TEXT.driving_kilometers}
              value={12345}
              onChange={() => console.log('hej')}
            />
          </Grid>
          <Grid
            item
            xs={12}>
            <TextField
              fullWidth
              required
              label={TEXT.driving_from}
              value="Testvej 123, 1234 Testby, Danmark"
              onChange={() => console.log('hej')}></TextField>
          </Grid>
          <Grid
            item
            xs={12}>
            <TextField
              fullWidth
              required
              label={TEXT.driving_to}
              value="Testvej 456, 5678 Testby, Danmark"
              onChange={() => console.log('hej')}
            />
          </Grid>
          <Grid
            item
            xs={12}>
            <TextField
              fullWidth
              required
              label={TEXT.driving_purpose}
              value={TEXT.driving_getting_temp}
              onChange={() => console.log('hej')}
            />
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
              {TEXT.driving_submit}
            </Button>
            <Tooltip
              title="hej"
              sx={{ ml: 1 }}>
              <IconButton
                size={'medium'}
                onClick={handleCreateUserInfoDialogOpen}>
                <InfoIcon />
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
      </form>
      <Dialog
        open={isCreateUserModalOpen}
        onClose={handleCreateUserModalClose}>
        <DialogTitle>{TEXT.expense_submitted}</DialogTitle>
        <Button onClick={handleCreateUserModalClose}>{TEXT.close}</Button>
      </Dialog>
      <Dialog
        open={infoCreateUserDialogOpen}
        onClose={handleCreateUserInfoDialogClose}>
        <DialogTitle>{TEXT.driving_modal_title}</DialogTitle>
        <DialogContent>
          {TEXT.driving_modal_info.map((content, index) => (
            <DialogContentText key={index}>{content}</DialogContentText>
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCreateUserInfoDialogClose}>Luk</Button>
        </DialogActions>
      </Dialog>
    </Container>
  )
}
