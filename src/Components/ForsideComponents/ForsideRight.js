import { Grid, Box } from '@mui/material'
import emailjs from 'emailjs-com'

emailjs.init('user_8HEIx6CnEORghk_fMdGcv')

export const ForsideRight = () => (
  <Grid
    item
    xs={12}
    md={6}
    style={{ height: '100%', padding: '20px' }}>
    <Box
      sx={{
        width: '100%',
        position: 'relative',
        paddingTop: '56.25%',
      }}>
      <iframe
        src="https://www.youtube.com/embed/jQbbvh_rphI"
        allowFullScreen
        title="Embedded youtube"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      />
    </Box>
  </Grid>
)
