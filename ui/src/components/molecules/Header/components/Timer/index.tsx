import { Stack, Typography } from '@mui/material'
import prettyMilliseconds from 'pretty-ms'
import { ReactElement } from 'react'
import { useStats } from '@/model/hooks.js'

export default function Timer(): ReactElement | null {
  const { timer } = useStats()

  if (timer == 0) return null

  return (
    <Stack alignItems={'center'} justifyContent={'center'} sx={{ position: 'absolute', width: '100%', left: 0 }}>
      <Typography color={'ButtonFace'} variant="h4">
        {prettyMilliseconds(timer, { colonNotation: true })}
      </Typography>
    </Stack>
  )
}
