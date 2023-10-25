import Typography from '@mui/material/Typography'

export const Title = ({ children }) => {
  return (
    <Typography
      component="h2"
      variant="h5"
      color="primary"
      gutterBottom
      sx={{
        mb: 3,
      }}>
      {children}
    </Typography>
  )
}
