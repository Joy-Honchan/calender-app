import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { PageSuspenseWrapper } from "components/UI/SuspenseWrapper";

// import Page Elements
const LandingPage = lazy(() => import("components/LandingPage/index"));
const CalenderPage = lazy(() => import("components/CalenderPage/index"));
const ChartPage = lazy(() => import("components/ChartPage/index"));

export const baseUrl = process.env.PUBLIC_URL;

const RouterConfig = createBrowserRouter(
  [
    {
      path: "/",
      element: <PageSuspenseWrapper component={<LandingPage />} />,
      errorElement: <div>There is a Error</div>,
    },
    {
      path: "/calender",
      element: <PageSuspenseWrapper component={<CalenderPage />} />,
    },
    {
      path: "/chart",
      element: <PageSuspenseWrapper component={<ChartPage />} />,
    },
  ],
  { basename: baseUrl }
);

export default RouterConfig;
