import { CssBaseline, ThemeProvider as MUIThemeProvider, StyledEngineProvider } from '@mui/material'
import { ReactElement, ReactNode } from 'react'
import theme from '@/components/theme/index.js'

type Props = {
  children: ReactNode
}

export default function ThemeProvider(props: Props): ReactElement {
  const { children } = props

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  )
}
