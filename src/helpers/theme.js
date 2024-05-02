import { createTheme } from "@mui/material";

export const themeOptions = createTheme({
  palette: {
    type: "light",
    primary: {
      //main: "rgba(0, 0, 0, 0.58)",
      main: "#4281a7",
    },
    secondary: {
      main: "#fff",
      dark:"#f2f2f2"
    },
    text: {
      disabled: "rgba(0,2,0,0.38)",
      hint: "rgba(0, 0, 0, 0.38)",
      //primary: "rgba(0, 0, 0, 0.87)",
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.54)",
    },
  },
});
