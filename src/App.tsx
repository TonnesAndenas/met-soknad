import "./App.css";
import { Grid, CssBaseline } from "@mui/material";
import Home from "./pages/Home";
import SiteHeader from "./components/SiteHeader";

function App() {
  return (
    <Grid
      className="App"

    >
      <CssBaseline />
      <SiteHeader />
      <Home />
    </Grid>
  );
}

export default App;
