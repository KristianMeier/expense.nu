import {
  Container,
  TextField,
  Button,
  Grid,
  IconButton,
  Tooltip,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@mui/material'
import InfoIcon from '@mui/icons-material/Info'
import { UploadButton } from '../Components/UploadButton'
import { useState } from 'react'
import { useLanguageContext } from '../Context/LanguageContext'
import { Title } from '../Components/Title'

export const VolunteerPage = () => {
  const [infoDrivingDialogOpen, setDrivingInfoDialogOpen] = useState(false)
  const { TEXT } = useLanguageContext()

  const handleDrivingInfoDialogOpen = () => {
    setDrivingInfoDialogOpen(true)
  }

  const handleDrivingInfoDialogClose = () => {
    setDrivingInfoDialogOpen(false)
  }

  return (
    <Container
      maxWidth="sm"
      sx={{ position: 'relative' }}>
      <Title>Opret en frivilling</Title>
      <form onSubmit={() => console.log('hej')}>
        <Grid
          container
          spacing={3}>
          <Grid
            item
            xs={12}>
            <TextField
              fullWidth
              label="hej"
              value="hej"
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
              label="hej"
              value={3}
              onChange={() => console.log('hej')}
            />
          </Grid>
          <Grid
            item
            xs={12}>
            <TextField
              select
              fullWidth
              label="hej"
              value="hej"
              onChange={() => console.log('hej')}>
              <MenuItem>Hej</MenuItem>
            </TextField>
          </Grid>
          <Grid
            item
            xs={12}>
            <TextField
              fullWidth
              label="hej"
              value="hej"
              onChange={() => console.log('hej')}
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
              Hej
            </Button>
            <Tooltip
              title="hej"
              sx={{ ml: 1 }}>
              <IconButton
                size={'medium'}
                onClick={handleDrivingInfoDialogOpen}>
                <InfoIcon />
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
      </form>
      <Dialog
        open={infoDrivingDialogOpen}
        onClose={handleDrivingInfoDialogClose}>
        <DialogTitle>{TEXT.driving_modal_title}</DialogTitle>
        <DialogContent>
          {TEXT.driving_modal_info.map((content, index) => (
            <DialogContentText key={index}>{content}</DialogContentText>
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDrivingInfoDialogClose}>Luk</Button>
        </DialogActions>
      </Dialog>
    </Container>
  )
}
