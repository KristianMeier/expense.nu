import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined'
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined'
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined'

const IconExampes = () => {
  return (
    <Grid
      container
      spacing={2}
      justifyContent="center">
      <Grid
        item
        xs={12}>
        <Typography
          variant="h6"
          align="center">
          Options
        </Typography>
      </Grid>
      <Grid item>
        <PersonAddOutlinedIcon fontSize="large" />
        <Typography variant="caption">Add User</Typography>
      </Grid>
      <Grid item>
        <AccountCircleOutlinedIcon fontSize="large" />
        <Typography variant="caption">User Profile</Typography>
      </Grid>
      <Grid item>
        <HowToRegOutlinedIcon fontSize="large" />
        <Typography variant="caption">Register</Typography>
      </Grid>
      <Grid
        item
        xs={12}>
        <Typography
          variant="h6"
          align="center">
          Forgotten Password
        </Typography>
      </Grid>
      <Grid item>
        <LockOpenOutlinedIcon fontSize="large" />
        <Typography variant="caption">Unlock</Typography>
      </Grid>
      <Grid item>
        <VpnKeyOutlinedIcon fontSize="large" />
        <Typography variant="caption">Retrieve Key</Typography>
      </Grid>
    </Grid>
  )
}

export default IconExampes
