import { Avatar, Stack, Typography } from '@mui/material'
import Timer from './components/Timer/index.js'

export default function Header() {
  return (
    <Stack
      alignItems="center"
      direction="row"
      justifyContent="space-between"
      sx={{ pl: 4, pr: 4, position: 'relative' }}
      width="100%"
    >
      <Typography color={'ButtonFace'} sx={{ m: 2 }} variant="h5">
        Find a match
      </Typography>
      <Timer />
      <Avatar sx={{ m: 2 }}>OP</Avatar>
    </Stack>
  )
}
