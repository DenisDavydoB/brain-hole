import { Box, styled } from '@mui/material'

export const Container: typeof Box = styled(Box)(() => ({
  display: 'flex',
  flexGrow: 1,
  position: 'relative',
}))
