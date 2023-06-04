import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material";
import { Router } from "./pages/Router";
import { BrowserRouter } from "react-router-dom";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

let theme = createTheme({
  palette: {
    backgroundLight: {
      main: "#202024",
    },
    background: {
      main: "#121214",
    },
    text: {
      light: "#E1E1E6",
      main: "#D5D5DA",
      dark: "#9C9CA1",
    },
    link: { main: "#EF6F1E" },
  },
  typography: {
    h1: {
      fontSize: "90px",
    },
    h2: {
      fontSize: "90px",
    },
    h3: {
      fontSize: "48px",
    },
    h4: {
      fontSize: "36px",
    },
    h5: {
      fontSize: "27px",
    },
    body1: {
      fontSize: "24px",
    },
    body2: {
      fontSize: "18px",
    },
  },
});

theme = responsiveFontSizes(theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
