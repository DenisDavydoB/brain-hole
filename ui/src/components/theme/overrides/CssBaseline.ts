import { Components } from '@mui/material'
import { deepOrange } from '@mui/material/colors'

export default function CssBaseline(): Components {
  return {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
        },
        html: {
          width: '100%',
          height: '100%',
        },
        body: {
          backgroundColor: deepOrange[200],
          width: '100%',
          height: '100%',
          touchAction: 'manipulation',
        },
        '#app': {
          width: '100%',
          height: '100%',
        },
      },
    },
  }
}
