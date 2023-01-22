import { CSSProperties, ReactElement, ReactNode } from 'react'

interface Props {
  isFlipped: boolean
  children: ReactNode[]
}

const container: CSSProperties = {
  perspective: '1000px',
}

const flipper: CSSProperties = {
  height: '100%',
  position: 'relative',
  width: '100%',
}

export default function FlippyContainer(props: Props): ReactElement {
  const { children, isFlipped } = props

  const frontRotateY = `rotateY(${isFlipped ? 180 : 0}deg)`
  const backRotateY = `rotateY(${isFlipped ? 0 : -180}deg)`

  const styles = {
    back: {
      WebkitBackfaceVisibility: 'hidden',
      backfaceVisibility: 'hidden',
      height: '100%',
      left: '0',
      position: isFlipped ? 'relative' : 'absolute',
      top: '0',
      transform: backRotateY,
      transformStyle: 'preserve-3d',
      transition: `1s`,
      width: '100%',
    } as CSSProperties,
    front: {
      WebkitBackfaceVisibility: 'hidden',
      backfaceVisibility: 'hidden',
      height: '100%',
      left: '0',
      position: isFlipped ? 'absolute' : 'relative',
      top: '0',
      transform: frontRotateY,
      transformStyle: 'preserve-3d',
      transition: `1s`,
      width: '100%',
      zIndex: '2',
    } as CSSProperties,
    container,
    flipper,
  }

  return (
    <div className="flippy-container" style={styles.container}>
      <div className="card-flipper" style={styles.flipper}>
        <div className="card-front" style={styles.front}>
          {getCardElement(0, children)}
        </div>

        <div className="card-back" style={styles.back}>
          {getCardElement(1, children)}
        </div>
      </div>
    </div>
  )
}

const getCardElement = (key: 0 | 1, elements: ReactNode[]) => {
  if (elements.length !== 2) {
    throw new Error('FlippyContainer requires 2 children')
  }
  return elements[key]
}
