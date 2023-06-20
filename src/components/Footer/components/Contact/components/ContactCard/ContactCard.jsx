import { Box, Typography } from "@mui/material";
import React from "react";

export function ContactCard({ icon, link }) {
  return (
    <Box
      heigth="36px"
      width="196px"
      marginBottom="18px"
      display="flex"
      flexDirection="row"
      color="link.main"
      alignItems="center"
      gap="10px"
    >
      {icon}
      <Typography color="text.main" variant="body2">{link}</Typography>
    </Box>
  );
}
