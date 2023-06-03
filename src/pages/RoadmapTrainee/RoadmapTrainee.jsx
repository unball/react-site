import { Box } from "@mui/material";
import { TimelineComponent } from "./components/TimelineComponent";
import { TitlePage } from "./components/TitlePage";

export function RoadmapTrainee() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        backgroundColor: "background.main",
        paddingBottom: "100px",
      }}
    >
      <TitlePage />
      <TimelineComponent />
    </Box>
  );
}
