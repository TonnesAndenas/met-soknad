import { Grid, Typography } from "@mui/material";

export default function Banner() {
  return (
    <Grid container
      direction="column"
      justifyContent="center"
      sx={{
        backgroundColor: "rgb(255, 255, 255)",
        minHeight: "130px",
        color: "rgb(11, 69, 94)",
      }}
    >
      <Typography variant="h3">Værdata</Typography>
    </Grid>
  );
}
