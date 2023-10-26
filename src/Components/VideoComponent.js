import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import { useLanguageContext } from '../Context/LanguageContext'
import { ComponentWrapper } from './ComponentWrapper'

export const VideoComponent = () => {
  const { TEXT } = useLanguageContext()

  return (
    <ComponentWrapper
      title={TEXT.video_heading}
      subtitle={TEXT.video_subtitle}>
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
    </ComponentWrapper>
  )
}
