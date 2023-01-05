import { SxProps } from '@mui/material'
import { ReactElement, ReactNode } from 'react'
import ReactCardFlip from 'react-card-flip'
import { Container } from './styles.js'

interface Props {
  front: ReactNode
  back: ReactNode
  isFlipped: boolean
  sx: SxProps
  onClick: () => void
}

export default function FlippyCard(props: Props): ReactElement {
  const { back, front, isFlipped, onClick, ...rest } = props

  return (
    <Container {...rest} onClick={onClick}>
      <ReactCardFlip isFlipped={isFlipped}>
        {front}
        {back}
      </ReactCardFlip>
    </Container>
  )
}
