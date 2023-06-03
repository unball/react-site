import { Box, Typography } from "@mui/material";
import React from "react";
import { DESCRIPTION_SUPORT } from "../../Texts";

import { ButtonDonation } from "./components/ButtonDonation";

export function BeASupporter() {
  return (
    <Box marginLeft="114px" marginTop="37px" color="text.main">
      <Typography
        fontWeight="700"
        sx={{ fontSize: { sm: "16px", md: "24px", lg: "24px" } }}
        color="link.main"
      >
        Seja um apoiador
      </Typography>
      <Typography
        sx={{
          fontSize: { sm: "12px", md: "16px", lg: "16px" },
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
