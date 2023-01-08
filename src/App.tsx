import { CssBaseline, ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import RouterConfig from "config/Route";
import ThemeConfig from "config/Theme";

function App() {
  return (
    <ThemeProvider theme={ThemeConfig}>
      <CssBaseline />
      <RouterProvider router={RouterConfig} />
    </ThemeProvider>
  );
}

export default App;
