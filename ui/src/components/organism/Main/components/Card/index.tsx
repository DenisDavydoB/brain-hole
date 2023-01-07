import { Grid } from '@mui/material'
import { ReactElement } from 'react'
import { useGuessedCards, useOpenedCards } from '../../model/hooks.js'
import { openCard } from '../../model/init.js'
import type { CardItem } from '../../model/types.js'
import FlippyCard from '@/components/molecules/FlippyCard/index.js'

interface Props {
  card: CardItem
}

export default function Card(props: Props): ReactElement {
  const { card } = props

  const openedCards = useOpenedCards()
  const guessedCards = useGuessedCards()

  const isGuessed = guessedCards.includes(card)
  const isOpened = openedCards.includes(card)

  const handleClick = () => {
    if (!isGuessed) openCard(card)
  }

  const opacity = isGuessed ? '0' : '1'

  const cardFront = <img height="100%" src={'./other/cover.png'} width="100%" />
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
}
