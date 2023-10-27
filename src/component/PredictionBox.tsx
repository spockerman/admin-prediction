import { useGetKpisQuery } from '@/state/api'
import { useState } from 'react'
import DashboardBox from './DashbordBox'
import FlexBetween from './FlexBetween'
import { Box, Typography, useTheme } from '@mui/material'

type Props = {}

const PredictionBox = (props: Props) => {
  const { palette } = useTheme()
  const [isPrediction, setPrediction] = useState(false)
  const { data: KpiData } = useGetKpisQuery()
  return (
    <DashboardBox width="100%" height="100%" p="1rem" overflow="hidden">
      <FlexBetween m="1rem 2.5rem">
        <Box>
          <Typography variant="h3">Revenue and Predictions</Typography>
          <Typography variant="h6">
            charted revenue and predicted revenue based on a simple linear
            regression model
          </Typography>
        </Box>
      </FlexBetween>
    </DashboardBox>
  )
}

export default PredictionBox
