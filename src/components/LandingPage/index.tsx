import { styled, Box, Typography } from '@mui/material'
import DayCountDown from './DayCountDown'
import dayjs from 'dayjs'
import generateCountNextHoliday from 'utils/countNextHoliday'
import NavigateButtoms from 'components/UI/NavigateButtons'
import bgImg from 'asset/4048260.jpg'

declare global {
  interface Window {
    versionObj: {
      node: () => string
      chrome: () => string
    }
  }
}

// const imgUrl = `./image/4048260.jpg`
const LandingPage = () => {
  const daysBeforeNextHoliday = generateCountNextHoliday(
    dayjs().format('YYYYMMDD')
  )
  const nodeVersion = window.versionObj.node()
  return (
    <StyleWrapper>
      <Box className="center-section-box">
        <Typography variant="h3" className="landing-title-typography">
          {nodeVersion}
        </Typography>
        <DayCountDown total={daysBeforeNextHoliday} />
        <NavigateButtoms currentPage={0} />
      </Box>
      <Typography role="picture-credit" className="picture-credit">
        <a href="https://www.freepik.com/free-vector/summer-landscape-wallpaper-zoom_8940571.htm#query=vacation&position=9&from_view=search&track=sph">
          Image by pikisuperstar
        </a>{' '}
        on Freepik
      </Typography>
    </StyleWrapper>
  )
}

const StyleWrapper = styled(Box)(({ theme }) => ({
  width: '100vw',
  height: '100vh',
  //background settings
  backgroundImage: `url(${bgImg})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  '@media (min-width:900px) and (orientation: landscape)': {
    backgroundSize: 'contain',
    backgroundPosition: 'center'
  },
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '.landing-title-box': {
    padding: `${theme.spacing(2)} 0`,
    textAlign: 'center',
    '.next-holiday-countdown-typography': {
      textShadow: `3px 3px ${theme.palette.grey[400]}`,
      fontWeight: theme.typography.fontWeightBold,
      paddingTop: theme.spacing(1)
    },
    '.landing-slogan-typography': {
      paddingTop: theme.spacing(1)
    }
  },
  '.picture-credit': {
    backgroundColor: 'rgba(219, 219, 219, 0.7)',
    position: 'absolute',
    bottom: theme.spacing(1),
    right: theme.spacing(1)
  }
}))

export default LandingPage
