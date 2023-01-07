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
      <Paper elevation={0} sx={{ borderRadius: 8, width: '90%' }}>
        {children}
      </Paper>
    </Stack>
  )
}
