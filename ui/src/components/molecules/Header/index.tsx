import { Avatar, Stack, Typography } from '@mui/material'

export default function Header() {
  return (
    <Stack alignItems="center" direction="row" height="60px" justifyContent="space-between" width="100%">
      <Typography color={'ButtonFace'} sx={{ m: 2 }} variant="h5">
        Find a match
      </Typography>
      <Avatar sx={{ m: 2 }}>OP</Avatar>
    </Stack>
  )
}
