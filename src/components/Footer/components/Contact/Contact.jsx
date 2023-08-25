import React from "react";
import { Stack, Typography } from "@mui/material";
import { ContactCard } from "./components/ContactCard/ContactCard";
import listContact from "./listContact";
import { DESCRIPTION_CONTACT } from "../../Texts";

export function Contact() {
  return (
    <Stack
      direction="column"
      color="text.main"
      width={{ xs: "100%", sm: "40%" }}
      id="contact"
    >
      <Typography fontWeight="700" variant="body1" color="link.main">
        Contato
      </Typography>
      <Typography
        variant="body2"
        sx={{
          marginTop: "24px",
          marginBottom: "38px",
        }}
      >
        {DESCRIPTION_CONTACT}
      </Typography>

      {listContact.map((item) => {
        return (
          <ContactCard
            key={Math.random()}
            icon={item.icon}
            link={item.link}
            fullLink={item.fullLink}
          />
        );
      })}
    </Stack>
  );
}
