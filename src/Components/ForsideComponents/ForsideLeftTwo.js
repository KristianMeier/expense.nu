import React from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import { LOREM } from '../../Constants/constants'

export const ForsideLeftTwo = () => (
  <Grid
    item
    xs={12}
    md={6}
    sx={{ height: '100%', p: 2 }}>
    <Box
      sx={{
        width: '100%',
        border: '1px solid black',
      }}>
      <Typography
        sx={{
          padding: '10px',
        }}>
        {LOREM}
      </Typography>
      <Box
        component="img"
        src="images/Registerudaleg.png"
        alt="Descriptive text"
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
    </Box>
  </Grid>
)
