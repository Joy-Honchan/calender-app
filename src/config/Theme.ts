import { createTheme } from "@mui/material/styles";

const ThemeConfig = createTheme({
  palette: {
    background: {
      default: "#fce4de",
    },
    primary: {
      light: "#FEBBA1",
      main: "#FF8F8B",
      dark: "#FF6E75",
      contrastText: "#FFF",
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
