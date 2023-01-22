import { Components, Theme } from '@mui/material'
import CssBaseline from './CssBaseline.js'
import Typography from './Typography.js'

export default function ComponentsOverrides(theme: Theme): Components {
  return {
    ...CssBaseline(),
    ...Typography(theme),
  }
}
