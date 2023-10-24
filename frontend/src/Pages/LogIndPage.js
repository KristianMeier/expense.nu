import { useState } from 'react'
import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Alert from '@mui/material/Alert'
import { useNavigate } from 'react-router-dom'
import { NAVIGATION, users } from '../Constants/constants'
import { Header } from '../Components/Header'

export const LogindPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleLogin = () => {
    const user = users[username]
    if (user && user.password === password) {
      navigate(NAVIGATION.registrer.path)
    } else {
      setError('Invalid username or password')
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
        <Header content="Log Ind" />
        <Box
          component="form"
          noValidate
          sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Brugernavn"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Password"
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
            Log Ind
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
