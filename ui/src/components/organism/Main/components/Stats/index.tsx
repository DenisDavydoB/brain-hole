import { Paper, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import prettyMilliseconds from 'pretty-ms'
import { useStats } from '../../model/hooks.js'

export default function Stats() {
  const [time] = useStats()

  return (
    <Paper elevation={4} sx={{ p: 2, height: '100%' }}>
      <Stack direction={'column'} sx={{ height: '100%' }}>
        <Typography variant="h6">Results</Typography>
        <Stack alignItems={'center'} direction={'row'} gap={4}>
          <Typography variant="body2">Time:</Typography>
          <Typography variant="body1">{prettyMilliseconds(time)}</Typography>
        </Stack>
      </Stack>
    </Paper>
  )
}
