import { Outlet } from 'react-router-dom'
import StickyFooter from './MuiTemplates/StickyFooter'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { AppBarBlue } from './MuiTemplates/AppBarBlue'

const defaultTheme = createTheme()

export const Layout = () => (
  <ThemeProvider theme={defaultTheme}>
    <CssBaseline />
    <AppBarBlue />
    <Outlet />
    <StickyFooter />
  </ThemeProvider>
)
