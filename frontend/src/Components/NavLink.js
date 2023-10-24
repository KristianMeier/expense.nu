import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { useNavigate } from 'react-router-dom'

//
// NOTE USED
//

export const NavLink = ({ to, text }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(to)
  }

  return (
    <Link
      component="button"
      variant="caption"
      onClick={handleClick}
      sx={{
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        color: 'inherit',
        paddingTop: '20px',
        paddingBottom: '8px',
      }}>
      <Typography variant="caption">{text}</Typography>
      <ArrowForwardIcon
        fontSize="small"
        sx={{ ml: 0.5 }}
      />
    </Link>
  )
}
