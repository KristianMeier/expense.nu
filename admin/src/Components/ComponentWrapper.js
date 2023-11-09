import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { Box, Button, Stack } from '@mui/material'
import { useLanguageContext } from '../Context/LanguageContext'
import { useNavigate } from 'react-router'

export const ComponentWrapper = ({ children, title, subtitle, buttons }) => {
  const { TEXT } = useLanguageContext()
  const navigate = useNavigate()

  return (
    <>
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 4,
          pb: 4,
        }}>
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
            sx={{
              '@media (max-width: 700px)': {
                fontSize: '2rem',
              },
            }}>
            {title}
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
            sx={{
              '@media (max-width: 700px)': {
                fontSize: '1.25rem',
              },
            }}>
            {subtitle}
          </Typography>
          {buttons && (
            <Stack
              sx={{ pt: 2 }}
              direction="row"
              spacing={2}
              justifyContent="center">
              <Button
                onClick={() => navigate('/signup')}
                variant="contained">
                {TEXT.try_it_for_free}
              </Button>
              <Button variant="outlined">{TEXT.see_it_in_action}</Button>
            </Stack>
          )}
        </Container>
      </Box>
      <Container
        sx={{ pb: 4 }}
        maxWidth="md">
        {children}
      </Container>
    </>
  )
}
