import { ThemeProvider, createTheme } from "@mui/material";
import { Router } from "./pages/Router";
import { BrowserRouter } from "react-router-dom";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const theme = createTheme({
  palette: {
    backgroundLight: {
      main: "#202024",
    },
    background: {
      main: "#121214",
    },
    text: { main: "#D5D5DA" },
    link: { main: "#EF6F1E" },
  },
});

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
