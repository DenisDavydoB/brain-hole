import { Paper, Stack } from '@mui/material'
import { ReactElement, ReactNode } from 'react'
import Header from '@/components/molecules/Header/index.js'

type Props = {
  children: ReactNode
}

export default function MainTemplate(props: Props): ReactElement {
  const { children } = props

  return (
    <Stack alignItems="center" direction="column" width="100%">
      <Header />
      <Paper elevation={0} sx={{ borderRadius: { sm: 8, xs: 4 }, width: { sm: '90%', xs: '87%' } }}>
        {children}
      </Paper>
    </Stack>
  )
}
