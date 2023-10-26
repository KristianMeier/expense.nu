import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import { useLanguageContext } from '../Context/LanguageContext'
import { useNavigate } from 'react-router'
import { NAVIGATION } from '../Constants/constants'

export const AppBarGrey = () => {
  const { changeLanguage, languageButtonText, TEXT } = useLanguageContext()
  const navigate = useNavigate()

  return (
    <AppBar
      position="sticky"
      color="default"
      elevation={0}
      sx={{
        borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        mb: 3,
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}>
      <Toolbar sx={{ flexWrap: 'wrap' }}>
        {/* <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            marginRight: '10px',
          }}>
          <img
            src="/images/logo.png"
            alt="Logo"
            style={{ height: '30px' }}
          />
        </Box> */}
        <Typography
          onClick={() => navigate(NAVIGATION.feedback)}
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1, cursor: 'pointer' }}>
          {/* {TEXT.demo} */}
          Feedback
        </Typography>
        <nav>
          {TEXT.menu_items_demo.map((item, index) => (
            <Link
              variant="button"
              color="text.primary"
              href="#"
              key={index}
              sx={{ my: 1, mx: 1 }}>
              {item}
            </Link>
          ))}
        </nav>
        <Button
          onClick={changeLanguage}
          variant="text"
          sx={{
            my: 1,
            textDecoration: 'underline',
            textTransform: 'none',
            fontSize: 'inherit',
            color: 'text.primary',
          }}>
          {languageButtonText}
        </Button>
        {/* <Button
          href="#"
          variant="contained"
          sx={{ my: 1, mx: 1 }}>
          Sign Up
        </Button> */}
        <Button
          onClick={() => navigate(NAVIGATION.signin)}
          href="#"
          variant="outlined"
          sx={{ my: 1, mx: 1 }}>
          {TEXT.login}
        </Button>
      </Toolbar>
    </AppBar>
  )
}
