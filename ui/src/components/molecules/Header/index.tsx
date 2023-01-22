import { Avatar, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import Timer from './components/Timer/index.js'

export default function Header() {
  const { t } = useTranslation()

  return (
    <Stack
      alignItems="center"
      direction="row"
      justifyContent="space-between"
      sx={{ px: { sm: 4, xs: 2 }, position: 'relative' }}
      width="100%"
    >
      <Typography color={'ButtonFace'} sx={{ m: { sm: 2, xs: 1 } }} variant="h5">
        {t('title')}
      </Typography>
      <Timer />
      <Avatar sx={{ m: { sm: 2, xs: 1 } }}>OP</Avatar>
    </Stack>
  )
}
