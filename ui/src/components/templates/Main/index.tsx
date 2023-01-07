import { Stack } from '@mui/material'
import { ReactElement, ReactNode } from 'react'
import Footer from '@/components/molecules/Footer/index.js'
import Header from '@/components/molecules/Header/index.js'

type Props = {
  children: ReactNode
}

export default function MainTemplate(props: Props): ReactElement {
  const { children } = props

  return (
    <Stack alignItems="center" direction="column" width="100%">
      <Header />
      {children}
    </Stack>
  )
}
