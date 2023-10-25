import { Container, Grid } from '@mui/material'
import emailjs from 'emailjs-com'
import { Header } from '../Components/Header'
import { ForsideRight } from '../Components/ForsideComponents/ForsideRight'
import { ForsideDialog } from '../Components/ForsideComponents/ForsideDialog'
import { ForsideLeft } from '../Components/ForsideComponents/ForsideLeft'
import { ForsideLeftTwo } from '../Components/ForsideComponents/ForsideLeftTwo'
import { ForsideRightTwo } from '../Components/ForsideComponents/ForsideRightTwo'
import { useLanguageContext } from '../Context/LanguageContext'

emailjs.init('user_8HEIx6CnEORghk_fMdGcv')

export const ForsidePage = () => {
  const { TEXT } = useLanguageContext()

  return (
    <Container
      maxWidth="lg"
      style={{ marginTop: '50px' }}>
      <Header content={TEXT.frontpage_title} />
      <Header
        variant="h5"
        content={TEXT.frontpage_subtitle}
      />
      <Grid
        container
        spacing={3}>
        <ForsideLeft />
        <ForsideRight />
        <ForsideLeftTwo />
        <ForsideRightTwo />
      </Grid>
      <ForsideDialog />
    </Container>
  )
}
