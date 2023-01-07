import { Button } from '@mui/material'
import { ReactElement } from 'react'

interface Props {
  onClick: () => void
}

export default function Start(props: Props): ReactElement {
  const { onClick } = props

  return (
    <Button size="large" sx={{ width: '360px' }} variant="outlined" onClick={onClick}>
      Start
    </Button>
  )
}
