import { SxProps } from '@mui/material'
import { ReactElement, ReactNode, useState } from 'react'
import ReactCardFlip from 'react-card-flip'
import { Container } from './styles.js'

interface Props {
  front: ReactNode
  back: ReactNode
  sx: SxProps
}

export default function FlippyCard(props: Props): ReactElement {
  const { back, front, ...rest } = props

  const [isFlipped, setIsFlipped] = useState(false)

  const handleClick = () => {
    setIsFlipped((prev) => !prev)
  }

  return (
    <Container {...rest} onClick={handleClick}>
      <ReactCardFlip isFlipped={isFlipped}>
        {front}
        {back}
      </ReactCardFlip>
    </Container>
  )
}
