import { Grid, Paper } from '@mui/material'
import { Card } from '../Card/index.js'
import { useCards, useGuessedCards, useOpenedCards } from '@/model/hooks.js'
import getCards from '@/shared/utils/helpers.js'

export default function CardsList() {
  const applicationCards = useCards()
  const openedCards = useOpenedCards()
  const guessedCards = useGuessedCards()

  const cards = applicationCards.length == 0 ? getCards() : applicationCards

  return (
    <Paper elevation={4} sx={{ p: { md: 2, xs: 1 }, width: { sm: 'calc(100vh - 120px)' } }}>
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
