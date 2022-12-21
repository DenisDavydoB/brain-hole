import { createTheme as createMuiTheme } from '@mui/material'
import ComponentsOverrides from './overrides/index.js'

const theme = createTheme()

export default theme

function createTheme() {
  const t = createMuiTheme()

  t.components = ComponentsOverrides()

  return t
}
