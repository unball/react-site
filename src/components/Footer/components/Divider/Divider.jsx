import { Box } from "@mui/material";
import React from "react";

export function Divider() {
  return (
    <Box
      width={{xs: "200px", sm: "3px"}}
      height={{xs: "3px", sm:"220px"}}
      backgroundColor="link.main"
      marginTop="50px"
      marginBottom="50px"
      borderRadius="50px"
    ></Box>
  );
}
