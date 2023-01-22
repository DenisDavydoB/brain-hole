import { Avatar, Stack, Typography } from '@mui/material'
import Timer from './components/Timer/index.js'

export default function Header() {
  return (
    <Stack
      alignItems="center"
      direction="row"
      justifyContent="space-between"
      sx={{ px: { sm: 4, xs: 2 }, position: 'relative' }}
      width="100%"
    >
      <Typography color={'ButtonFace'} sx={{ m: { sm: 2, xs: 1 } }} variant="h5">
        Find a match
      </Typography>
      <Timer />
      <Avatar sx={{ m: { sm: 2, xs: 1 } }}>OP</Avatar>
    </Stack>
  )
}
