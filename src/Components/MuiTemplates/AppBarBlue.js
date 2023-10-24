import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import ApprovalIcon from '@mui/icons-material/Approval'

export const AppBarBlue = () => (
  <AppBar position="relative">
    <Toolbar>
      <ApprovalIcon sx={{ mr: 2 }} />
      <Typography
        variant="h6"
        color="inherit"
        noWrap>
        Album layout
      </Typography>
    </Toolbar>
  </AppBar>
)
