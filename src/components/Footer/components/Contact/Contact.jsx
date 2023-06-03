import React from "react";
import { Box, Typography } from "@mui/material";
import { ContactCard } from "./components/ContactCard/ContactCard";
import listContact from "./listContact";
import { DESCRIPTION_CONTACT } from "../../Texts";

export function Contact() {
  return (
    <Box
      marginLeft="160px"
      marginTop="37px"
      paddingRight="44px"
      width="516px"
      color="text.main"
    >
      <Typography
        fontWeight="700"
        sx={{ fontSize: { sm: "16px", md: "24px", lg: "24px" } }}
        color="link.main"
      >
        Contato
      </Typography>
      <Typography
        sx={{
          fontSize: { sm: "12px", md: "16px", lg: "16px" },
          marginTop: "24px",
          marginBottom: "38px",
        }}
      >
        {DESCRIPTION_CONTACT}
      </Typography>

      {listContact.map((item) => {
        return <ContactCard icon={item.icon} link={item.link} />;
      })}
    </Box>
  );
}
