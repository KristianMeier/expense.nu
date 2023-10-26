import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { useLanguageContext } from '../Context/LanguageContext'

export const VideoComponent = () => {
  const { TEXT } = useLanguageContext()

  return (
    <>
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 6,
          pb: 6,
        }}>
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom>
            {TEXT.video_heading}
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph>
            {TEXT.video_subtitle}
          </Typography>
        </Container>
      </Box>
      <Container
        sx={{ pb: 4 }}
        maxWidth="md">
        <Grid
          item
          xs={12}
          md={6}
          sx={{ height: '100%', p: 2 }}>
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
      </Container>
    </>
  )
}
