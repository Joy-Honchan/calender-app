import { createTheme } from "@mui/material/styles";

const ThemeConfig = createTheme({
  palette: {
    primary: {
      light: "#FFDFD8",
      main: "#FF8F8B",
      dark: "#FF6E75",
    },
    secondary: {
      main: "#ffcc71",
      dark: "#FFB12B",
    },
  },
  typography: {
    fontFamily: ["Noto Sans", "Noto Sans TC", "sans-serif"].join(","),
  },
});

export default ThemeConfig;
