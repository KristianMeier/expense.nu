import { Button, TextField, Typography, Grid, Box } from '@mui/material'
import emailjs from 'emailjs-com'

import { useNavigate } from 'react-router-dom'
import { useEmailContext } from '../../../Context/EmailContext'
import { NAVIGATION } from '../../../Constants/constants'
import { useLanguageContext } from '../../../Context/LanguageContext'

emailjs.init('user_8HEIx6CnEORghk_fMdGcv')

export const ForsideLeft = () => {
  const navigate = useNavigate()
  const { email, handleEmailChange, handleRequestDemo } = useEmailContext()
  const { TEXT } = useLanguageContext()

  return (
    <Grid
      item
      xs={12}
      md={6}
      style={{ padding: '20px' }}>
      <Grid
        container
        spacing={3}
        alignItems="center">
        <Grid
          item
          xs={12}>
          <Typography variant="body2">{TEXT.long_text}</Typography>
        </Grid>
        <Grid
          item
          xs={12}>
          <Box
            component="img"
            src="images/integrations.png"
            alt="Descriptive text"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => navigate(NAVIGATION.logInd)}
            style={{ height: '56px' }}>
            {TEXT.login}
          </Button>
        </Grid>
        <Grid
          item
          xs={8}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={handleEmailChange}
            style={{ height: '56px' }}
          />
        </Grid>
        <Grid
          item
          xs={4}>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            onClick={handleRequestDemo}
            style={{ height: '56px' }}>
            {TEXT.request_demo}
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}
