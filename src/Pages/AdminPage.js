import { Container, TextField, Button, Grid } from '@mui/material'
import { Title } from '../Components/Title'

export const AdminPage = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{ position: 'relative' }}>
      <Title>Admin</Title>
      <form onSubmit={() => console.log('Demo')}>
        <Grid
          container
          spacing={3}>
          <Grid
            item
            xs={12}>
            <TextField
              fullWidth
              required
              label="Bruger Info"
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}>
            <TextField
              fullWidth
              required
              label="Bruger Info"
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}>
            <TextField
              fullWidth
              required
              label="Bruger Info"
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}>
            <TextField
              fullWidth
              required
              label="Bruger Info"
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}>
            <TextField
              fullWidth
              required
              label="Bruger Info"
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            container
            alignItems="center">
            <Button
              variant="contained"
              color="primary"
              type="submit">
              Tilføj Bruger
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  )
}
