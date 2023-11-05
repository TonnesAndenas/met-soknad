import { Grid } from "@mui/material";
import DataTable from "../components/DataTable";
import { getWeatherDataBjolsen, getWeatherDataOrfiske } from "../fetchWeatherData";

export default function Home() {
  return (
    <Grid container sx={{ alignContent: "center", justifyContent: "center" }}>
      <DataTable data={getWeatherDataBjolsen()} />
      <DataTable data={getWeatherDataOrfiske()} />
    </Grid>
  );
}
