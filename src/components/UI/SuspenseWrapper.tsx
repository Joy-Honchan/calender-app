import { Suspense, ReactNode } from "react";
import { Skeleton } from "@mui/material";

export const PageSuspenseWrapper = ({
  component,
}: {
  component: ReactNode;
}) => {
  return <Suspense fallback={<div>Loading...</div>}>{component}</Suspense>;
};

export const IconSuspenseWrapper = ({
  component,
}: {
  component: ReactNode;
}) => {
  return (
    <Suspense fallback={<Skeleton variant="circular" width={40} height={40} />}>
      {component}
    </Suspense>
  );
};
