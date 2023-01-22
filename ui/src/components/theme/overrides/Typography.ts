import { Components, Theme } from '@mui/material'

export default function Typography(theme: Theme): Components {
  return {
    MuiTypography: {
      styleOverrides: {
        h4: {
          [theme.breakpoints.down('sm')]: {
            fontSize: '1.5rem',
          },
        },
        h5: {
          [theme.breakpoints.down('sm')]: {
            fontSize: '1.25rem',
          },
        },
      },
    },
  }
}
