import { Typography } from '@mui/material'

export const Header = ({ content }) => (
  <Typography
    variant="h4"
    align="center"
    gutterBottom
    sx={{
      paddingTop: '15px',
      paddingBottom: '15px',
    }}>
    {content}
  </Typography>
)
