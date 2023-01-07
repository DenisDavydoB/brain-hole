import { Grid, Stack } from '@mui/material'
import CardsList from './components/CardsList/index.js'
import Start from './components/Start/index.js'
import Stats from './components/Stats/index.js'
import { useApplicationState } from './model/hooks.js'
import { applicationStart } from './model/index.js'

export default function Main() {
  const [isWorking] = useApplicationState()

  const handleClick = () => {
    applicationStart()
  }

  return (
    <Grid container spacing={1} sx={{ p: 4 }}>
      <Grid item xs={2}>
        {isWorking ? null : <Start onClick={handleClick} />}
      </Grid>
      <Grid item xs={8}>
        <Stack alignItems="center" direction={'column'} gap={2}>
          <CardsList />
        </Stack>
      </Grid>
      <Grid item xs={2}>
        {isWorking ? <Stats /> : null}
      </Grid>
    </Grid>
  )
}
