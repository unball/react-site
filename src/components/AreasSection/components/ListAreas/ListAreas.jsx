import { Grid, Box } from "@mui/material";
import { CardAreas } from "./components/CardAreas/CardAreas";
import AreasListDescription from "../../AreasListDescription";

export function ListAreas() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      width="90%"
      padding="30px"
    >
      <Grid
        container
        spacing={{ xs: 1, sm: 2 }}
        columns={{ xs: 2, sm: 4, lg: 8 }}
        justifyContent="center"
      >
        {AreasListDescription.map((item) => {
          return <CardAreas key={Math.random()} item={item} />;
        })}
      </Grid>
    </Box>
  );
}
