import React from "react";
import { Box } from "@mui/material";

import { AboutSection } from "../../components/AboutSection";
import { AreasSection } from "../../components/AreasSection";
import { CompetitionsSection } from "../../components/CompetitionsSection";
import { MembersSection } from "../../components/MembersSection";

export function Home() {
  return (
    <Box backgroundColor="background.main">
      <AboutSection />
      <CompetitionsSection />
      <MembersSection />
      <AreasSection />
    </Box>
  );
}
