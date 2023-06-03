import React from "react";
import { Button } from "@mui/material";

export function ButtonDonation() {
  return (
    <Button
      variant="text"
      sx={{
        color: "text.main",
        textTransform: "none",
        fontWeight: 700,
        backgroundColor: "#EF6F1E",
        width: "240px",
        height: "60px",
        borderRadius: "10px",
        fontSize: "18px",
      }}
    >
      Faça uma doação
    </Button>
  );
}
