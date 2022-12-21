import { ReactElement, ReactNode, useState } from 'react'
import { Container } from './styles.js'

interface Props {
  front: ReactNode
  back: ReactNode
}

export default function FlippyCard(props: Props): ReactElement {
  const { back, front } = props

  const [isFlipped, setIsFlipped] = useState(false)

  const handleClick = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <Container onClick={handleClick}>
      {front}
      {back}
    </Container>
  )
}
