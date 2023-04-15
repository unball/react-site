import { ThemeProvider, createTheme } from "@mui/material";
import { Router } from "./pages/Router";
import { BrowserRouter } from "react-router-dom";

const theme = createTheme({
  palette: {
    background: {
      main: "#121214",
      light: "#202024",
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
