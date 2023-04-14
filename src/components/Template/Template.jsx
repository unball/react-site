import React from "react";
import { Box } from "@mui/material";
import { NavBar } from "../NavBar/NavBar";

export function Template({ children }) {
  return (
    <Box sx={{display: 'flex'}}>
      <NavBar />
      {children}
    </Box>
  );
}
