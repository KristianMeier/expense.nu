import { Container, Grid } from '@mui/material'
import emailjs from 'emailjs-com'
import { Header } from '../Components/Header'
import { ForsideRight } from '../Components/ForsideComponents/ForsideRight'
import { ForsideDialog } from '../Components/ForsideComponents/ForsideDialog'
import { ForsideLeft } from '../Components/ForsideComponents/ForsideLeft'
import { ForsideLeftTwo } from '../Components/ForsideComponents/ForsideLeftTwo'
import { ForsideRightTwo } from '../Components/ForsideComponents/ForsideRightTwo'

emailjs.init('user_8HEIx6CnEORghk_fMdGcv')

export const ForsidePage = () => (
  <Container
    maxWidth="lg"
    style={{ marginTop: '50px' }}>
    <Header content="Expenses.nu" />
    <Header
      variant="h5"
      content="Udlægshåndtering gjort simpelt"
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
