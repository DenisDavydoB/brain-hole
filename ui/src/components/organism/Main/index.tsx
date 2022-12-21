import { Stack, Typography } from '@mui/material'
import MainTemplate from '@/components/templates/Main/index.js'

export default function Main() {
  return (
    <MainTemplate>
      <Stack alignItems="center" direction="row" width="100%">
        <Typography>Card will be here</Typography>
      </Stack>
    </MainTemplate>
  )
}
