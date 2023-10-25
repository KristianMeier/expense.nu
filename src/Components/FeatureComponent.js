import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { useLanguageContext } from '../Context/LanguageContext'

export const FeatureComponent = () => {
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
            {TEXT.feature_heading}
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph>
            {TEXT.feature_description}
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center">
            <Button variant="contained">{TEXT.try_it_for_free}</Button>
            <Button variant="outlined">{TEXT.see_it_in_action}</Button>
          </Stack>
        </Container>
      </Box>
      <Container
        sx={{ py: 8 }}
        maxWidth="md">
        <Grid
          container
          spacing={4}>
          {TEXT.cards.map((card) => (
            <Grid
              item
              key={card.image}
              xs={12}
              sm={6}
              md={4}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}>
                <CardMedia
                  component="div"
                  sx={{ pt: '56.25%' }}
                  image={card.image}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2">
                    {card.heading}
                  </Typography>
                  <Typography>{card.description}</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">{TEXT.try_it}</Button>
                  <Button size="small">{TEXT.read_more}</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}
