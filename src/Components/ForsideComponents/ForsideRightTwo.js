import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import { useLanguageContext } from '../../Context/LanguageContext'

export const ForsideRightTwo = () => {
  const { TEXT } = useLanguageContext()

  return (
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
          {TEXT.lorem}
        </Typography>
        <Box
          component="img"
          src="images/Registreringshistoric.png"
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
}
