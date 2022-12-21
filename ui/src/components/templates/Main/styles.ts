import { Box, styled } from '@mui/material'

export const Container: typeof Box = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  width: '100%',
}))
