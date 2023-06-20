import { Box, Typography } from "@mui/material";
import React from "react";
import { DESCRIPTION_SUPORT } from "../../Texts";

import { ButtonDonation } from "./components/ButtonDonation";

export function BeASupporter() {
  return (
    <Box width={{xs: "100%", sm: "40%"}}>
      <Typography fontWeight="700" variant="body1" color="link.main">
        Seja um apoiador
      </Typography>
      <Typography
        variant="body2"
        color="text.main"
        sx={{
          marginTop: "24px",
          marginBottom: "64px",
        }}
      >
        {DESCRIPTION_SUPORT}
      </Typography>
      <Box display="flex" justifyContent="center">
        <ButtonDonation />
      </Box>
    </Box>
  );
}
