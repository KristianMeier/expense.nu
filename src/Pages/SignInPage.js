import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { useNavigate } from 'react-router-dom'
import { NAVIGATION } from '../Constants/constants'
import { useLanguageContext } from '../Context/LanguageContext'

export const SignInPage = () => {
  const navigate = useNavigate()
  const { TEXT } = useLanguageContext()

  return (
    <Container
      component="main"
      maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography
          component="h1"
          variant="h5">
          {TEXT.signin_signin}
        </Typography>
        <Box sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label={TEXT.signin_email}
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label={TEXT.signin_password}
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={
              <Checkbox
                value="remember"
                color="primary"
              />
            }
            label={TEXT.signin_remember}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}>
            {TEXT.signin_signin}
          </Button>
          <Grid container>
            <Grid
              item
              xs>
              <Typography
                variant="body2"
                onClick={() => navigate(NAVIGATION.forgot)}
                sx={{
                  cursor: 'pointer',
                  textDecoration: 'underline',
                  color: 'primary.main',
                }}>
                {TEXT.signin_forgot}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body2"
                onClick={() => navigate(NAVIGATION.signup)}
                sx={{
                  cursor: 'pointer',
                  textDecoration: 'underline',
                  color: 'primary.main',
                }}>
                {TEXT.signin_signup}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  )
}
