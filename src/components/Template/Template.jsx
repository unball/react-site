import React from "react";
import { Box } from "@mui/material";
import { NavBar } from "../NavBar/NavBar";
import { NavDrawer } from "../NavDrawer/NavDrawer";
import { SiteContextProvider } from "../../contexts/SiteContext";
import { Footer } from "../Footer";

export function Template({ children }) {
  return (
    <SiteContextProvider>
      <Box sx={{ display: "flex" }}>
        <NavBar />
        <NavDrawer />
      </Box>
      {children}
      <Footer />
    </SiteContextProvider>
  );
}
