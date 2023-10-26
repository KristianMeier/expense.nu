import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { useLanguageContext } from '../Context/LanguageContext'
import { NAVIGATION } from '../Constants/constants'
import { useNavigate } from 'react-router'
import { ComponentWrapper } from './ComponentWrapper'

export const CustomerStoryComponent = () => {
  const { TEXT } = useLanguageContext()
  const navigate = useNavigate()

  return (
    <ComponentWrapper
      title={TEXT.feature_heading_user_story}
      subtitle={TEXT.feature_description_story}>
      <Grid
        container
        spacing={4}>
        {TEXT.cards_user_story.map((card) => (
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
                image={card.image_user_story}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2">
                  {card.heading_user_story}
                </Typography>
                <Typography>{card.description_user_story}</Typography>
              </CardContent>
              <CardActions>
                <Button
                  onClick={() => navigate(NAVIGATION.signup)}
                  size="small">
                  {TEXT.try_it_user_story}
                </Button>
                <Button size="small">{TEXT.read_more_user_story}</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </ComponentWrapper>
  )
}
