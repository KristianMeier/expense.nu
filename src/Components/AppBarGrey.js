import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import { useLanguageContext } from '../Context/LanguageContext'

export const AppBarGrey = () => {
  const { changeLanguage, languageButtonText, TEXT } = useLanguageContext()

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
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}>
          {TEXT.demo}
        </Typography>
        <nav>
          {TEXT.menu_items_demo.map((item, index) => (
            <Link
              variant="button"
              color="text.primary"
              href="#"
              key={index}
              sx={{ my: 1, mx: 1.5 }}>
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
        <Button
          href="#"
          variant="outlined"
          sx={{ my: 1, mx: 1.5 }}>
          {TEXT.login}
        </Button>
      </Toolbar>
    </AppBar>
  )
}
