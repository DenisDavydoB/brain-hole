import { Stack, styled } from '@mui/material'

export const Container: typeof Stack = styled(Stack)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  height: '100%',
  width: '100%',
  top: 0,
  left: 0,
}))
