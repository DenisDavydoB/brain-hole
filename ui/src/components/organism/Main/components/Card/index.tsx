import { Grid } from '@mui/material'
import { ReactElement } from 'react'
import type { CardItem } from '../../types.js'
import FlippyCard from '@/components/molecules/FlippyCard/index.js'

interface Props {
  card: CardItem
}

export default function Card(props: Props): ReactElement {
  const { card } = props

  const cardFront = <img height="100%" src={'./other/cover.png'} width="100%" />
  const cardBack = <img height="100%" src={card.url} width="100%" />

  return (
    <Grid item xs={2}>
      <FlippyCard back={cardBack} front={cardFront} sx={{ borderRadius: '5%' }} />
    </Grid>
  )
}
