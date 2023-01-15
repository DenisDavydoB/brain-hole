import { Stack } from '@mui/material'
import CardsList from './components/CardsList/index.js'
import Loading from './components/Loading/index.js'
import Start from './components/Start/index.js'
import Stats from './components/Stats/index.js'
import { useApplicationState } from '@/model/hooks.js'
import { applicationStart } from '@/model/index.js'

export default function Main() {
  const { done, idle, loading } = useApplicationState()

  const handleClick = () => {
    applicationStart()
  }

  return (
    <Stack alignItems="center" justifyContent={'center'} spacing={1} sx={{ p: 2, height: '100%', width: '100%' }}>
      <Stack direction={'column'} gap={2} sx={{ position: 'relative', width: 'fit-content' }}>
        <CardsList />
        {loading ? <Loading /> : null}
        {idle ? <Start onClick={handleClick} /> : null}
        {done ? <Stats onClick={handleClick} /> : null}
      </Stack>
    </Stack>
  )
}
