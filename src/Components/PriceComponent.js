import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { useLanguageContext } from '../Context/LanguageContext'
import { ComponentWrapper } from './ComponentWrapper'
import { useNavigate } from 'react-router'
import { NAVIGATION } from '../Constants/constants'

export const PriceComponent = () => {
  const { TEXT } = useLanguageContext()
  const navigate = useNavigate()

  return (
    <ComponentWrapper
      title={TEXT.pricing_title}
      subtitle={TEXT.pricing_subtitle}>
      <Grid
        container
        spacing={5}
        alignItems="flex-end">
        {TEXT.tiers.map((tier) => (
          <Grid
            item
            key={tier.title}
            xs={12}
            sm={tier.title === 'Premium' ? 12 : 6}
            md={4}>
            <Card>
              <CardHeader
                title={tier.title}
                subheader={tier.subheader}
                titleTypographyProps={{ align: 'center' }}
                subheaderTypographyProps={{
                  align: 'center',
                }}
                sx={{
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                      ? theme.palette.grey[200]
                      : theme.palette.grey[700],
                }}
              />
              <CardContent>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'baseline',
                    mb: 2,
                  }}>
                  <Typography
                    component="h2"
                    variant="h3"
                    color="text.primary">
                    {tier.price}
                  </Typography>
                  <Typography
                    variant="h6"
                    color="text.secondary">
                    {TEXT.month}
                  </Typography>
                </Box>
                <ul>
                  {tier.description.map((line) => (
                    <Typography
                      component="li"
                      variant="subtitle1"
                      align="center"
                      key={line}>
                      {line}
                    </Typography>
                  ))}
                </ul>
              </CardContent>
              <CardActions>
                <Button
                  onClick={() => navigate(NAVIGATION.signup)}
                  fullWidth
                  variant={tier.buttonVariant}>
                  {tier.buttonText}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </ComponentWrapper>
  )
}
