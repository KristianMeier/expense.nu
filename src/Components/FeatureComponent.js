import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { useLanguageContext } from '../Context/LanguageContext'
import { useNavigate } from 'react-router'
import { NAVIGATION } from '../Constants/constants'
import { ComponentWrapper } from './ComponentWrapper'

export const FeatureComponent = () => {
  const { TEXT } = useLanguageContext()
  const navigate = useNavigate()

  return (
    <ComponentWrapper
      title={TEXT.feature_heading}
      subtitle={TEXT.feature_description}
      buttons>
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
                <Button
                  onClick={() => navigate(NAVIGATION.signup)}
                  size="small">
                  {TEXT.try_it}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </ComponentWrapper>
  )
}
