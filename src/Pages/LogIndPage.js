import { useState } from 'react'
import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Alert from '@mui/material/Alert'
import { useNavigate } from 'react-router-dom'
import { NAVIGATION, TEXT, USERS } from '../Constants/constants'
import { Header } from '../Components/Header'
import { Typography } from '@mui/material'

export const LogindPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleLogin = () => {
    const user = USERS[username]
    if (user && user.password === password) {
      navigate(NAVIGATION.registrer.path)
    } else {
      setError(TEXT.error)
    }
  }

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
        <Header content={TEXT.login_page_header} />
        <Typography color={'red'}>{TEXT.login_page_hint}</Typography>
        <Box
          component="form"
          noValidate
          sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label={TEXT.login_page_username}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label={TEXT.login_page_password}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleLogin}>
            {TEXT.login_page_button}
          </Button>
          {error && (
            <Alert
              severity="error"
              sx={{ mt: 2 }}>
              {error}
            </Alert>
          )}
        </Box>
      </Box>
    </Container>
  )
}
