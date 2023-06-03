import React from "react";
import { Box } from "@mui/material";
import { Contact } from "./components/Contact";
import { Divider } from "./components/Divider";
import { BeASupporter } from "./components/BeASupporter";

export function Footer() {
  return (
    <Box
      backgroundColor="#202024"
      width="100%"
      height="378px"
      display="flex"
      flexDirection="row"
    >
      <Contact />
      <Divider />
      <BeASupporter />
    </Box>
  );
}
