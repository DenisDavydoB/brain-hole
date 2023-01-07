import { Button, Paper, Stack, Typography } from '@mui/material'
import { ReactElement } from 'react'
import { Container } from './styles.js'

interface Props {
  onClick: () => void
}

export default function Start(props: Props): ReactElement {
  const { onClick } = props

  return (
    <Container>
      <Paper elevation={16} sx={{ p: 4, maxWidth: '80%' }}>
        <Stack alignItems={'center'} gap={2}>
          <Button size="large" sx={{ width: '360px' }} variant="contained" onClick={onClick}>
            Start
          </Button>
          <Typography>
            When you click on the Start button, a 6x6 field opens, on which 18 pairs of pictures are randomly arranged.
            After 3 seconds, the cards are closed and the timer starts counting down. Task: to find a pair of pictures
            by clicking alternately (1 click opens the card, 2 clicks the second, if they match, they disappear from the
            screen, if not, they flip again after 0.5 seconds).
          </Typography>
        </Stack>
      </Paper>
    </Container>
  )
}
