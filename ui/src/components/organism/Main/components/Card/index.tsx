import { Grid } from '@mui/material'
import { memo, ReactElement } from 'react'
import FlippyCard from '@/components/molecules/FlippyCard/index.js'
import { openCard } from '@/model/index.js'
import type { CardItem } from '@/model/types.js'

const CARD_COVER_URL = './other/cover.png'

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

  const cardFront = <img height="100%" src={CARD_COVER_URL} width="100%" />
  const cardBack = <img height="100%" src={card.url} width="100%" />

  return (
    <Grid item sx={{ opacity, transition: 'opacity 750ms' }} xs={3}>
      <FlippyCard
        back={cardBack}
        front={cardFront}
        isFlipped={isOpened}
        sx={{ borderRadius: '5%' }}
        onClick={handleClick}
      />
    </Grid>
  )
})
