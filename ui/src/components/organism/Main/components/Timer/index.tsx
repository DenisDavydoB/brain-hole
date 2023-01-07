import { Stack, Typography } from '@mui/material'
import prettyMilliseconds from 'pretty-ms'
import { ReactElement } from 'react'
import { useTimer } from '../../model/hooks.js'

interface Props {
  name: string
}

export default function Timer(props: Props): ReactElement {
  const { name } = props

  const timer = useTimer()

  return (
    <Stack alignItems={'center'} gap={4}>
      <Typography variant="h5">{prettyMilliseconds(timer)}</Typography>
    </Stack>
  )
}
