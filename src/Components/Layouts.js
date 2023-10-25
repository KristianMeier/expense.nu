import { Outlet } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { CssBaseline, GlobalStyles } from '@mui/material'
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
    <Outlet />
    <Footer />
  </ThemeProvider>
)
