import { Stack, Typography } from '@mui/material'
import { lightBlue } from '@mui/material/colors'

export default function Footer() {
  return (
    <Stack alignItems="center" direction="row" height="40px" sx={{ backgroundColor: lightBlue[900] }} width="100%">
      <Typography>Footer</Typography>
    </Stack>
  )
}
