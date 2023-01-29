import { Button, Paper, Stack, Typography } from '@mui/material'
import prettyMilliseconds from 'pretty-ms'
import { ReactElement } from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from './styles.js'
import { useStats } from '@/model/hooks.js'

const COLUMN_WIDTH = 100

interface Props {
  onClick: () => void
}

export default function Start(props: Props): ReactElement {
  const { onClick } = props
  const { timer, mistakes } = useStats()
  const { t } = useTranslation()

  return (
    <Container>
      <Paper elevation={16} sx={{ p: 4, maxWidth: '80%' }}>
        <Stack direction={'column'} gap={1}>
          <Typography variant="h6">Stats:</Typography>
          <Stack alignItems={'center'} direction={'row'} gap={4}>
            <Typography sx={{ width: COLUMN_WIDTH, flexShrink: 0 }} variant="body2">
              {t('components.stats.time')}
            </Typography>
            <Typography variant="body1">{prettyMilliseconds(timer, { colonNotation: true })}</Typography>
          </Stack>
          <Stack alignItems={'center'} direction={'row'} gap={4}>
            <Typography sx={{ width: COLUMN_WIDTH, flexShrink: 0 }} variant="body2">
              {t('components.stats.missing')}
            </Typography>
            <Typography variant="body1">{mistakes}</Typography>
          </Stack>
          <Button size="large" sx={{ width: { md: '360px', xs: '100%' } }} variant="contained" onClick={onClick}>
            {t('common.buttons.tryAgain')}
          </Button>
        </Stack>
      </Paper>
    </Container>
  )
}
