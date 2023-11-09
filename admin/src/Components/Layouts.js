import { Outlet } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Box, CssBaseline, GlobalStyles } from '@mui/material'
import { AppBarGrey } from './AppBarGrey'
import { Footer } from './Footer'

const defaultTheme = createTheme()

export const Layout = () => (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyles
      styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }}
    />
    <CssBaseline />
    <AppBarGrey />
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}>
      <Box sx={{ flex: 1 }}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  </ThemeProvider>
)
