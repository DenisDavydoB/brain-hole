import { CircularProgress } from '@mui/material'
import { ReactElement } from 'react'
import { Container } from './styles.js'

export default function Loading(): ReactElement {
  return (
    <Container>
      <CircularProgress color={'secondary'} size={100} thickness={4} />
    </Container>
  )
}
