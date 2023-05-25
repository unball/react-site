import React from "react";
import { TitlePage } from "./components/TitlePage";
import { Stack } from "@mui/material";
import { ListAreas } from "./components/ListAreas/ListAreas";

export function AreasSection() {
  return (
    <Stack
      id="areas"
      sx={{
        backgroundColor: "#121214",
        paddingBottom: "160px",
      }}
      direction={{ xs: "column", sm: "column" }}
      spacing={{ xs: 1, sm: 2, md: 4 }}
      justifyContent="center"
      alignItems="center"
    >
      <TitlePage />
      <ListAreas />
    </Stack>
  );
}
