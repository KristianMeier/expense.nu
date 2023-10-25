import { Button } from '@mui/material'
import { CloudUpload } from '@mui/icons-material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { green } from '@mui/material/colors'
import { useAppContext } from '../Context/AppContext'
import { useLanguageContext } from '../Context/LanguageContext'

export const UploadButton = () => {
  const { receipt, handleReciptUpload } = useAppContext()
  const { TEXT } = useLanguageContext()

  return (
    <Button
      variant="outlined"
      component="label"
      style={{
        borderColor: receipt ? green[500] : undefined,
        color: receipt ? green[500] : undefined,
      }}>
      {receipt ? (
        <CheckCircleIcon style={{ color: green[500], marginRight: '10px' }} />
      ) : (
        <CloudUpload style={{ marginRight: '10px' }} />
      )}
      {receipt
        ? TEXT.registrer_button_uploaded
        : TEXT.registrer_button_not_uploaded}
      <input
        type="file"
        hidden
        accept="image/*"
        onChange={handleReciptUpload}
      />
    </Button>
  )
}
