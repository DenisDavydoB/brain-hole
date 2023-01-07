import { Avatar, Stack, Typography } from '@mui/material'

export default function Header() {
  return (
    <Stack alignItems="center" direction="row" justifyContent="space-between" sx={{ pl: 4, pr: 4 }} width="100%">
      <Typography color={'ButtonFace'} sx={{ m: 2 }} variant="h5">
        Find a match
      </Typography>
      <Avatar sx={{ m: 2 }}>OP</Avatar>
    </Stack>
  )
}
