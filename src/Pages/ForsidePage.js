import { Container, Grid } from '@mui/material'
import emailjs from 'emailjs-com'
import { Header } from '../Components/Header'
import { ForsideRight } from '../Components/ForsideComponents/ForsideRight'
import { ForsideDialog } from '../Components/ForsideComponents/ForsideDialog'
import { ForsideLeft } from '../Components/ForsideComponents/ForsideLeft'

emailjs.init('user_8HEIx6CnEORghk_fMdGcv')

export const ForsidePage = () => (
  <Container
    maxWidth="lg"
    style={{ marginTop: '50px' }}>
    <Header content="Udlægshåndtering gjort simpelt" />
    <Grid
      container
      spacing={3}>
      <ForsideLeft />
      <ForsideRight />
    </Grid>
    <ForsideDialog />
  </Container>
)
