import React from "react";
import { Stack, Typography } from "@mui/material";
import { TITLE } from "../../Texts";

export function TitlePage() {
  return (
    <Stack width="100%" justifyContent="center" direction="row">
      <Typography
        variant="h3"
        color= "text.main"
        sx={{
          fontWeight: 700,
        }}
      >
        {TITLE}
      </Typography>
    </Stack>
  );
}
