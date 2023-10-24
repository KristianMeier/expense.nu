import { Typography } from '@mui/material'

export const Header = ({ content, variant }) => (
  <Typography
    variant={variant ? variant : 'h4'}
    align="center"
    gutterBottom
    sx={{
      paddingBottom: '15px',
    }}>
    {content}
  </Typography>
)
