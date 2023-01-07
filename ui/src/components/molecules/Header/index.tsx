import { Avatar, Stack, Typography } from '@mui/material'
import { deepOrange } from '@mui/material/colors'

export default function Header() {
  return (
    <Stack
      alignItems="center"
      direction="row"
      height="60px"
      justifyContent="space-between"
      sx={{ backgroundColor: deepOrange[200] }}
      width="100%"
    >
      <Typography color={'ButtonFace'} sx={{ m: 2 }} variant="h5">
        Find a match
      </Typography>
      <Avatar sx={{ m: 2 }}>OP</Avatar>
    </Stack>
  )
}
