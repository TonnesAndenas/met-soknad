import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Grid } from "@mui/material";
import { IWeatherData } from "../types";



// table to display weatherdata with function useWeatherDataWithParams
export default function DataTable(props: { data: { weatherData: IWeatherData | undefined; isLoading: boolean; error: Error | undefined; }; }, ) {
  const { data } = props;
  const { weatherData, isLoading, error } = data;
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  if (!weatherData) {
    return <p>No data</p>;
  }
  return (
    <Grid container xs={8} sx={{ justifyContent: "center" }}>
      <Table
        sx={{ border: "solid 4px #77c4d6", marginTop: "4rem" }}
        aria-label="table"
      >
        <TableHead sx={{ backgroundColor: "rgb(36, 88, 110)" }}>
          <TableRow>
            <TableCell
              sx={{
                padding: "2rem",
                fontSize: "18px",
                color: "rgb(255, 255, 255)",
              }}
              align="left"
            >
              Location
            </TableCell>
            <TableCell
              sx={{
                padding: "2rem",
                fontSize: "18px",
                color: "rgb(255, 255, 255)",
              }}
              align="left"
            >
              Superlocation
            </TableCell>{" "}
            <TableCell
              sx={{
                padding: "2rem",
                fontSize: "18px",
                color: "rgb(255, 255, 255)",
              }}
              align="right"
            >
              PM10 Concentration (µg/m³)
            </TableCell>
            <TableCell
              sx={{
                padding: "2rem",
                fontSize: "18px",
                color: "rgb(255, 255, 255)",
              }}
              align="right"
            >
              PM25 Concentration (µg/m³)
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ backgroundColor: "rgb(255, 255, 255)" }}>
          <TableRow key={weatherData.meta.location.name}>
            <TableCell sx={{ padding: "2rem" }} align="left">
              {weatherData.meta.location.name}
            </TableCell>
            <TableCell sx={{ padding: "2rem" }} align="left">
              {weatherData.meta.superlocation.name}
            </TableCell>{" "}
            <TableCell sx={{ padding: "2rem" }} align="right">
              {weatherData.data.time[0].variables.pm10_concentration.value.toFixed(2)}
            </TableCell>
            <TableCell sx={{ padding: "2rem" }} align="right">
              {weatherData.data.time[0].variables.pm25_concentration.value.toFixed(2)}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Grid>
  );
}



