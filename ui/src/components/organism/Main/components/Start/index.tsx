import { Button, Paper, Stack, Typography } from '@mui/material'
import { ReactElement } from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from './styles.js'

interface Props {
  onClick: () => void
}

export default function Start(props: Props): ReactElement {
  const { onClick } = props

  const { t } = useTranslation()

  return (
    <Container>
      <Paper elevation={16} sx={{ p: { sm: 4, xs: 2 }, maxWidth: '80%' }}>
        <Stack alignItems={'center'} gap={2}>
          <Button size="large" sx={{ width: { sm: '360px', xs: '100%' } }} variant="contained" onClick={onClick}>
            {t('common.buttons.start')}
          </Button>
          <Typography textAlign={'justify'}>{t('description')}</Typography>
        </Stack>
      </Paper>
    </Container>
  )
}
