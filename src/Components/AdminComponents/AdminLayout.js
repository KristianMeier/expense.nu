import { Outlet } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Box, CssBaseline, GlobalStyles } from '@mui/material'
import { AdminAppBarGrey } from './AdminAppBarGrey'
import { AdminFooter } from './AdminFooter'

const defaultTheme = createTheme()

export const AdminLayout = () => (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyles
      styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }}
    />
    <CssBaseline />
    <AdminAppBarGrey />
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}>
      <Box sx={{ flex: 1 }}>
        <Outlet />
      </Box>
      <AdminFooter />
    </Box>
  </ThemeProvider>
)
