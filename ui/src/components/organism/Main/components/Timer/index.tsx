import { Stack, Typography } from '@mui/material'
import { useStore } from 'effector-react'
import prettyMilliseconds from 'pretty-ms'
import { ReactElement } from 'react'
import { $timer } from '@/shared/timer/index.js'

interface Props {
  name: string
}

export default function Timer(props: Props): ReactElement {
  const { name } = props

  const timer = useStore($timer)

  return (
    <Stack alignItems={'center'} gap={4}>
      <Typography variant="h5">{prettyMilliseconds(timer)}</Typography>
    </Stack>
  )
}
