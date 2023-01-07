import { Paper, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import prettyMilliseconds from 'pretty-ms'
import { useStats } from '../../model/hooks.js'

const COLUMN_WIDTH = 100

export default function Stats() {
  const { timer, guessedNumber } = useStats()

  return (
    <Paper elevation={4} sx={{ p: 2, height: '100%' }}>
      <Stack direction={'column'} sx={{ height: '100%' }}>
        <Typography sx={{ pb: 4 }} variant="h6">
          Stats:
        </Typography>
        <Stack alignItems={'center'} direction={'row'} gap={4}>
          <Typography sx={{ width: COLUMN_WIDTH, flexShrink: 0 }} variant="body2">
            Time:
          </Typography>
          <Typography variant="body1">{prettyMilliseconds(timer)}</Typography>
        </Stack>
        <Stack alignItems={'center'} direction={'row'} gap={4}>
          <Typography sx={{ width: COLUMN_WIDTH, flexShrink: 0 }} variant="body2">
            Guessed:
          </Typography>
          <Typography variant="body1">{guessedNumber}</Typography>
        </Stack>
      </Stack>
    </Paper>
  )
}
