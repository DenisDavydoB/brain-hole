import { Grid, Stack } from '@mui/material'
import CardsList from './components/CardsList/index.js'
import Start from './components/Start/index.js'
import Stats from './components/Stats/index.js'
import Timer from './components/Timer/index.js'
import { useApplicationState } from './model/hooks.js'
import { applicationStart } from './model/init.js'

export default function Main() {
  const [isWorking, isDone] = useApplicationState()

  const handleClick = () => {
    applicationStart()
  }

  return (
    <Grid container spacing={1} sx={{ p: 4 }}>
      <Grid item xs={2}>
        {isWorking ? <Timer name={'Main Timer'} /> : <Start onClick={handleClick} />}
      </Grid>
      <Grid item xs={8}>
        <Stack alignItems="center" direction={'column'} gap={2}>
          <CardsList />
        </Stack>
      </Grid>
      <Grid item xs={2}>
        {isDone ? <Stats /> : null}
      </Grid>
    </Grid>
  )
}
