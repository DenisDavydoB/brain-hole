import { Stack } from '@mui/material'
import CardsList from './components/CardsList/index.js'
import Start from './components/Start/index.js'
import Stats from './components/Stats/index.js'
import Timer from './components/Timer/index.js'
import { useApplicationState } from './model/hooks.js'
import { applicationStart } from './model/init.js'
import { Container } from './styles.js'

export default function Main() {
  const [isWorking, isDone] = useApplicationState()

  const handleClick = () => {
    applicationStart()
  }

  return (
    <Container alignItems="center" direction="row" gap={4} sx={{ pt: 2, pr: 24, pb: 2, pl: 24 }} width="100%">
      <Stack alignItems="center" direction={'column'} gap={2}>
        {isWorking ? <Timer name={'Main Timer'} /> : <Start onClick={handleClick} />}
        <CardsList />
      </Stack>
      {isDone ? <Stats /> : null}
    </Container>
  )
}
