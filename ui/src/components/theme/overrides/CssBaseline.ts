import { Components } from '@mui/material'

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
