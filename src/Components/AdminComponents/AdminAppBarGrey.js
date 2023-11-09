import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

export const AdminAppBarGrey = () => {
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
        <Typography
          variant="button"
          color="text.primary"
          sx={{ my: 1, mx: 1, cursor: 'pointer' }}>
          Admin
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
