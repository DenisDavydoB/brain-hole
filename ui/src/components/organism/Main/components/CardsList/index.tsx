import { Grid, Paper } from '@mui/material'
import getCards from '../../model/helpers.js'
import { useCards } from '../../model/hooks.js'
import Card from '../Card/index.js'

export default function CardsList() {
  const stateCards = useCards()

  const cards = stateCards.length == 0 ? getCards() : stateCards

  return (
    <Paper elevation={4} sx={{ p: 2, width: 'calc(100vh - 160px)' }}>
      <Grid container spacing={1}>
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </Grid>
    </Paper>
  )
}
