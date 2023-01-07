import { Grid, Paper } from '@mui/material'
import { Card } from '../Card/index.js'
import { useCards, useGuessedCards, useOpenedCards } from '@/model/hooks.js'
import getCards from '@/shared/utils/helpers.js'

export default function CardsList() {
  const stateCards = useCards()

  const openedCards = useOpenedCards()
  const guessedCards = useGuessedCards()

  const cards = stateCards.length == 0 ? getCards() : stateCards

  return (
    <Paper elevation={4} sx={{ p: 2, width: 'calc(100vh - 160px)' }}>
      <Grid container spacing={1}>
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            isGuessed={guessedCards.includes(card)}
            isOpened={openedCards.includes(card)}
          />
        ))}
      </Grid>
    </Paper>
  )
}
