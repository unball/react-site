import React from "react";
import { TitlePage } from "./components/TitlePage";
import { Stack } from "@mui/material";
import { ListAreas } from "./components/ListAreas/ListAreas";

export function AreasSection() {
  return (
    <Stack
      id="areas"
      height="fit-content"
      w="100%"
      sx={{
        backgroundColor: "background.main",
        paddingBottom: "160px",
      }}
      paddingTop={10}
      direction="column"
      spacing={{ xs: 2, sm: 4 }}
      justifyContent="center"
      alignItems="center"
    >
      <TitlePage />
      <ListAreas />
    </Stack>
  );
}
