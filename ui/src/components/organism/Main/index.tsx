import { Grid, Stack } from '@mui/material'
import Card from './components/Card/index.js'
import Timer from './components/Timer/index.js'
import { useCards } from './model/index.js'
import { Container } from './styles.js'

export default function Main() {
  const cards = useCards()

  return (
    <Container alignItems="center" direction="row" sx={{ pt: 4, pr: 24, pb: 4, pl: 24 }} width="100%">
      <Stack direction={'column'}>
        <Timer name={'Main Timer'} />
        <Grid container spacing={1}>
          {cards.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </Grid>
      </Stack>
    </Container>
  )
}
