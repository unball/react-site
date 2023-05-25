import { Stack } from "@mui/material";
import { CardAreas } from "./components/CardAreas/CardAreas";
import AreasListDescription from "../../AreasListDescription";

export function ListAreas() {
  return (
    <Stack
      width="90%"
      height="fit-content"
      display="flex"
      justifyContent="center"
      alignItems="baseline"
      flexWrap="warp"
      direction={{ xs: "column", sm: "row" }}
      spacing={{ xs: 1, sm: 2, md: 4 }}
      sx={{
        verticalAlign: "middle",
      }}
    >
      {AreasListDescription.map((item) => {
        return <CardAreas item={item} />;
      })}
    </Stack>
  );
}
