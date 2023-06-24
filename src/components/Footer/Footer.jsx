import React from "react";
import { Box, Stack } from "@mui/material";
import { Contact } from "./components/Contact";
import { Divider } from "./components/Divider";
import { BeASupporter } from "./components/BeASupporter";

export function Footer() {
  return (
    <Stack w="100%" id="footer">
      <Stack
        direction={{ xs: "column", sm: "row" }}
        backgroundColor="backgroundLight.main"
        paddingX={{ xs: 2, sm: 4, md: 8, lg: 12 }}
        paddingY={4}
        justifyContent={{xs: "center", sm: "space-around"}}
        alignItems={{xs: "center", sm: "self-start" }}
      >
        <Contact />
        <Divider />
        <BeASupporter />
      </Stack>
    </Stack>
  );
}
