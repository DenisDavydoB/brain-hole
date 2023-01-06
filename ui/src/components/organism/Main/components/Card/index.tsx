import { Grid } from '@mui/material'
import { ReactElement } from 'react'
import { useOpenedCards } from '../../model/hooks.js'
import { openCard } from '../../model/init.js'
import type { CardItem } from '../../model/types.js'
import FlippyCard from '@/components/molecules/FlippyCard/index.js'

interface Props {
  card: CardItem
}

export default function Card(props: Props): ReactElement {
  const { card } = props

  const openedCards = useOpenedCards()

  const handleClick = () => {
    openCard(card)
  }

  const cardFront = <img height="100%" src={'./other/cover.png'} width="100%" />
  const cardBack = <img height="100%" src={card.url} width="100%" />

  return (
    <Grid item xs={3}>
      <FlippyCard
        back={cardBack}
        front={cardFront}
        isFlipped={openedCards.includes(card)}
        sx={{ borderRadius: '5%' }}
        onClick={handleClick}
      />
    </Grid>
  )
}
