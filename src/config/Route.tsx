import { lazy } from 'react'
import { createBrowserRouter, createHashRouter } from 'react-router-dom'
import { PageSuspenseWrapper } from 'components/UI/SuspenseWrapper'

// import Page Elements
// const LandingPage = lazy(() => import('components/LandingPage/index'))
// const CalenderPage = lazy(() => import('components/CalenderPage/index'))
// const ChartPage = lazy(() => import('components/ChartPage/index'))
import LandingPage from 'components/LandingPage'
import CalenderPage from 'components/CalenderPage'
import ChartPage from 'components/ChartPage'

// export const baseUrl = process.env.PUBLIC_URL || ''

// const RouterConfig = createBrowserRouter(
//   [
//     {
//       path: '/',
//       element: <PageSuspenseWrapper component={<LandingPage />} />,
//       errorElement: <div>There is a Error</div>
//     },
//     {
//       path: '/calender',
//       element: <PageSuspenseWrapper component={<CalenderPage />} />
//     },
//     {
//       path: '/chart',
//       element: <PageSuspenseWrapper component={<ChartPage />} />
//     }
//   ],
//   { basename: baseUrl }
// )

const RouterConfig = createHashRouter(
  [
    {
      path: '/',
      element: <LandingPage />
      // errorElement: <div>There is a Error</div>,
    },
    {
      path: '/calender',
      element: <CalenderPage />
    },
    {
      path: '/chart',
      element: <ChartPage />
    }
  ]
  // { basename: baseUrl }
)

export default RouterConfig
