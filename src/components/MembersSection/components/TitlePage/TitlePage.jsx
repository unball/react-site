import React from "react";
import { Stack, Typography } from "@mui/material";
import { TITLE } from "../../Texts";

export function TitlePage() {
  return (
    <Stack width="100%" justifyContent="center" direction="row">
      <Typography
        variant="h2"
        sx={{
          color: "text.main",
          fontWeight: 700,
          fontSize: { sm: "26px", md: "36px", lg: "36px" },
        }}
      >
        {TITLE}
      </Typography>
    </Stack>
  );
}
