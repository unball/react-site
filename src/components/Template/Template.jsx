import React from "react";
import { Box } from "@mui/material";
import { NavBar } from "../NavBar/NavBar";
import { NavDrawer } from "../NavDrawer/NavDrawer";
import { SiteContextProvider } from "../../contexts/SiteContext";

export function Template({ children }) {
  return (
    <SiteContextProvider>
      <Box sx={{ display: "flex" }}>
        <NavBar />
        <NavDrawer />
        {children}
      </Box>
    </SiteContextProvider>
  );
}
