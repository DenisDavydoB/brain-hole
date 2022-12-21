import { Components } from '@mui/material'
import CssBaseline from './CssBaseline.js'

export default function ComponentsOverrides(): Components {
  return {
    ...CssBaseline(),
  }
}
