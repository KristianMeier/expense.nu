import { useState } from 'react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'
import AccountCircle from '@mui/icons-material/AccountCircle'
import Box from '@mui/material/Box'
import { useNavigate } from 'react-router-dom'
import { ACCOUNT_MENU, NAVIGATION } from '../../Constants/constants'

const ACCOUNT_MENU = [
  {
    path: NAVIGATION.registrer.path,
    content: 'Registrer',
  },
  {
    path: NAVIGATION.historik.path,
    content: 'Historik',
  },
  {
    path: NAVIGATION.logUd.path,
    content: 'Log Ud',
  },
]

export const AccountMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const navigate = useNavigate()

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box sx={{ position: 'absolute', top: 8, right: 8 }}>
      <IconButton
        size="large"
        edge="end"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit">
        <AccountCircle />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}>
        {ACCOUNT_MENU.map((item) => (
          <MenuItem
            key={item.content}
            onClick={() => {
              navigate(item.path)
              handleClose()
            }}>
            {item.content}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  )
}
