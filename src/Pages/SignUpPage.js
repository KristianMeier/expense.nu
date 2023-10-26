import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { useNavigate } from 'react-router-dom'
import { NAVIGATION } from '../Constants/constants'
import { useLanguageContext } from '../Context/LanguageContext'

export const SignUpPage = () => {
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
          <PersonAddOutlinedIcon />
        </Avatar>
        <Typography
          component="h1"
          variant="h5">
          {TEXT.signup_signup}
        </Typography>
        <Box sx={{ mt: 3 }}>
          <Grid
            container
            spacing={2}>
            <Grid
              item
              xs={12}
              sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label={TEXT.signup_first_name}
                autoFocus
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label={TEXT.signup_last_name}
                name="lastName"
                autoComplete="family-name"
              />
            </Grid>
            <Grid
              item
              xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label={TEXT.signup_email}
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid
              item
              xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label={TEXT.signup_password}
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}>
            {TEXT.signup_signup}
          </Button>
          <Grid
            container
            justifyContent="flex-end">
            <Grid item>
              <Typography
                variant="body2"
                onClick={() => navigate(NAVIGATION.signin)}
                sx={{
                  cursor: 'pointer',
                  textDecoration: 'underline',
                  color: 'primary.main',
                }}>
                {TEXT.signup_already}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  )
}
