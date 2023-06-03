import React from "react";
import { Box, Typography } from "@mui/material";

export function LeftCard({ date, responsibleMember }) {
  return (
    <Box>
      <Typography variant="subtitle2" color="#E6E6E6">
        {date}
      </Typography>
      <Typography variant="subtitle2" color="#E6E6E6">
        {responsibleMember}
      </Typography>
    </Box>
  );
}
