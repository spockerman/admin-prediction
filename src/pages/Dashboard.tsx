import DashboardBox from '@/component/DashbordBox'
import { Box, useMediaQuery, useTheme } from '@mui/material'

const gridTemplateLargeScreens = `
    "a b c"
    "a b c"
    "a b c"
    "a b f"
    "d e f"
    "d e f"
    "d h i"
    "g h i"
    "g h j"
    "g h j"
`
const gridTemplateSmallScreens = `
    "a"
    "a"
    "a"
    "a"
    "b"
    "b"
    "b"
    "b"
    "c"
    "c"
    "c"
    "d"
    "d"
    "d"
    "e"
    "e"
    "f"
    "f"
    "f"
    "g"
    "g"
    "g"
    "h"
    "h"
    "h"
    "h"
    "i"
    "i"
    "j"
    "j"

`
function Dashboard() {
  const { palette } = useTheme()
  const isAbouveMediumScreens = useMediaQuery('(min-width:1200px)')

  return (
    <Box
      width="100%"
      height="100%"
      display="grid"
      gap="1.5rem"
      color={palette.grey['400']}
      sx={
        isAbouveMediumScreens
          ? {
              gridTemplateColumns: 'repeat(3, minmax(370px, 1fr))',
              gridTemplateRows: 'repeat(10, minmax(60px, 1fr))',
              gridTemplateAreas: gridTemplateLargeScreens,
            }
          : {
              gridAutoColumns: '1fr',
              gridAutoRows: '80px',
              gridTemplateAreas: gridTemplateSmallScreens,
            }
      }
    >
      <DashboardBox gridArea="a" bgcolor={palette.grey[400]}></DashboardBox>
      <DashboardBox gridArea="b" bgcolor={palette.grey[400]}></DashboardBox>
      <DashboardBox gridArea="c" bgcolor={palette.grey[400]}></DashboardBox>
      <DashboardBox gridArea="d" bgcolor={palette.grey[400]}></DashboardBox>
      <DashboardBox gridArea="e" bgcolor={palette.grey[400]}></DashboardBox>
      <DashboardBox gridArea="f" bgcolor={palette.grey[400]}></DashboardBox>
      <DashboardBox gridArea="g" bgcolor={palette.grey[400]}></DashboardBox>
      <DashboardBox gridArea="h" bgcolor={palette.grey[400]}></DashboardBox>
      <DashboardBox gridArea="i" bgcolor={palette.grey[400]}></DashboardBox>
      <DashboardBox gridArea="j" bgcolor={palette.grey[400]}></DashboardBox>
    </Box>
  )
}

export default Dashboard
