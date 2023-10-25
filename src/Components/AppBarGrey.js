import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import { MENU_ITEMS_DEMO, TEXT } from '../Constants/constants'
import { useLanguageContext } from '../Context/LanguageContext'

export const AppBarGrey = () => {
  const { changeLanguage, languageButtonText } = useLanguageContext()

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}>
      <Toolbar sx={{ flexWrap: 'wrap' }}>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}>
          {TEXT.expense_management}
        </Typography>
        <nav>
          {MENU_ITEMS_DEMO.map((item, index) => (
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
