import AppBar from '@mui/material/AppBar'
// import Button from '@mui/material/Button'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { useLanguageContext } from '../Context/LanguageContext'
import { useNavigate } from 'react-router'
// import { NAVIGATION } from '../Constants/constants'
import { useAppContext } from '../Context/AppContext'

export const AppBarGrey = () => {
  const { changeLanguage, languageButtonText, TEXT } = useLanguageContext()
  const { isLoggedIn } = useAppContext()
  // const {  changeLoginStatus } = useAppContext()
  const navigate = useNavigate()

  // const handleAuthButton = () => {
  //   if (isLoggedIn) {
  //     changeLoginStatus()
  //   }
  //   navigate(NAVIGATION.signin)
  // }

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
      <Toolbar sx={{ flexWrap: 'wrap', justifyContent: 'flex-end' }}>
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
        {/* <Typography
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}>
          {TEXT.demo}
        </Typography> */}
        {isLoggedIn &&
          TEXT.menu_items_demo.map((item, index) => (
            <Typography
              variant="button"
              color="text.primary"
              onClick={() => navigate(item.path)}
              key={index}
              sx={{ my: 1, mx: 1, cursor: 'pointer' }}>
              {item.name}
            </Typography>
          ))}
        <Typography
          onClick={changeLanguage}
          variant="button"
          color="text.primary"
          sx={{ my: 1, mx: 1, cursor: 'pointer' }}>
          {languageButtonText}
        </Typography>
        {/* <Button
          href="#"
          variant="contained"
          sx={{ my: 1, mx: 1 }}>
          Sign Up
        </Button> */}
        {/* <Button
          // onClick={() => navigate(NAVIGATION.signin)}
          onClick={() => handleAuthButton()}
          variant="outlined"
          sx={{ my: 1, mx: 1 }}>
          {isLoggedIn ? TEXT.logout : TEXT.login}
        </Button> */}
      </Toolbar>
    </AppBar>
  )
}
