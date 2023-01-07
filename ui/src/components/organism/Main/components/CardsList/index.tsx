import { Grid, Paper } from '@mui/material'
import { useCards } from '../../model/hooks.js'
import Card from '../Card/index.js'

export default function CardsList() {
  const cards = useCards()

  return (
    <Paper elevation={4} sx={{ p: 2, width: 'calc(100vh - 180px)' }}>
      <Grid container spacing={1}>
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </Grid>
    </Paper>
  )
}
