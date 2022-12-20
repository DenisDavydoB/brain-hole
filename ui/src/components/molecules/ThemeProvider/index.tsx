import { CssBaseline, StyledEngineProvider } from '@mui/material'
import { ReactElement, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export default function ThemeProvider(props: Props): ReactElement {
  const { children } = props

  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      {children}
    </StyledEngineProvider>
  )
}
