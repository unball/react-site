import React from "react";
import { Button } from "@mui/material";

export function ButtonDonation() {
  return (
    <Button
      variant="contained"
      color="link"
      sx={{
        textTransform: "none",
        fontWeight: 700,
        width: "240px",
        height: "60px",
        fontSize: "18px",
        borderRadius: "10px",
      }}
    >
      Faça uma doação
    </Button>
  );
}
