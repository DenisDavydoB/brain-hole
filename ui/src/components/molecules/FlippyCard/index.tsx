import { SxProps } from '@mui/material'
import { ReactElement, ReactNode } from 'react'
import { Container } from './styles.js'
import FlippyContainer from '@/components/atoms/FlippyContainer/index.js'

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
      <FlippyContainer isFlipped={isFlipped}>
        {front}
        {back}
      </FlippyContainer>
    </Container>
  )
}
