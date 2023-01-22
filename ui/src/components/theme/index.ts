import { createTheme as createMuiTheme } from '@mui/material'
import breakpoints from './breakpoints.js'
import ComponentsOverrides from './overrides/index.js'

const theme = createTheme()

export default theme

function createTheme() {
  const t = createMuiTheme({ breakpoints })

  t.components = ComponentsOverrides(t)

  return t
}
