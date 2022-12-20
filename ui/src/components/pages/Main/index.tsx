import { Typography } from '@mui/material'
import FlippyCard from '@/components/molecules/FlippyCard/index.js'
import MainTemplate from '@/components/templates/Main/index.js'

export default function MainPage() {
  return (
    <MainTemplate>
      <Typography>
        <FlippyCard>
          <>card will here</>
        </FlippyCard>
      </Typography>
    </MainTemplate>
  )
}
