import { Avatar, Stack, Typography } from '@mui/material'
import { deepOrange } from '@mui/material/colors'

export default function Header() {
  return (
    <Stack
      alignItems="center"
      direction="row"
      height="80px"
      justifyContent="space-between"
      sx={{ backgroundColor: deepOrange[200] }}
      width="100%"
    >
      <Typography sx={{ m: 2 }} variant="h4">
        Donut hole in your brain
      </Typography>
      <Avatar sx={{ m: 2 }}>OP</Avatar>
    </Stack>
  )
}
