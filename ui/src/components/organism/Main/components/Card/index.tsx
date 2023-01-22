import { Grid } from '@mui/material'
import { CSSProperties, memo, ReactElement } from 'react'
import FlippyCard from '@/components/molecules/FlippyCard/index.js'
import { openCard } from '@/model/index.js'
import type { CardItem } from '@/model/types.js'

const CARD_COVER_URL = './other/cover.png'

const style: CSSProperties = { maxWidth: '100%', minWidth: 0, maxHeight: '100%', minHeight: 0 }

interface Props {
  card: CardItem
  isGuessed: boolean
  isOpened: boolean
}

export const Card = memo(function Card(props: Props): ReactElement {
  const { card, isGuessed, isOpened } = props

  const handleClick = () => {
    if (!isGuessed) openCard(card)
  }

  const opacity = isGuessed ? '0' : '1'

  const cardFront = <img height={100} src={CARD_COVER_URL} style={style} width={100} />
  const cardBack = <img height={100} src={card.url} style={style} width={100} />

  return (
    <Grid item sm={2} sx={{ opacity, transition: 'opacity 750ms' }} xs={3}>
      <FlippyCard
        back={cardBack}
        front={cardFront}
        isFlipped={isOpened}
        sx={{ borderRadius: '5%', aspectRatio: '1/1', overflow: 'hidden' }}
        onClick={handleClick}
      />
    </Grid>
  )
})
