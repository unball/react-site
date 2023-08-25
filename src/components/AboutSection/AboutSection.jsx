import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import Image from "mui-image";

import AboutLogo from "../../assets/logo_about.png";
import AboutLogo2 from "../../assets/logo_about2.png";
import { TITLE, SUBTITLE, DESCRIPTION, ALT } from "./Texts";

export function AboutSection() {
  return (
    <Stack
      id="about"
      w="100%"
      marginTop={{xs: 0, sm: 4}}
      paddingLeft={{ xs: 1, sm: 0 }}
      direction={{ xs: "column", sm: "row" }}
      sx={{ backgroundColor: "background.main" }}
      paddingY={5}
      alignItems="center"
    >
      <Box height="30%" width="30%" display={{ sm: "none" }}>
        <Image src={AboutLogo2} alt={ALT} fit="contain" />
      </Box>
      <Box height="90%" width="90%" display={{ xs: "none", sm: "block" }}>
        <Image src={AboutLogo} alt={ALT} fit="contain" />
      </Box>
      <Stack
        spacing={3}
        sx={{
          width: "100%",
          justifyContent: "center",
          height: "auto",
          marginLeft: { xs: 0, sm: 10 },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            color: "link.main",
            fontWeight: 700,
          }}
        >
          {TITLE}
        </Typography>
        <Typography
          variant="h3"
          sx={{
            color: "text.main",
            fontWeight: 700,
          }}
        >
          {SUBTITLE}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "text.main",
            paddingRight: { xs: "20px", sm: "50px", md: "100px" },
            lineHeight: "200%",
          }}
        >
          {DESCRIPTION}
        </Typography>
      </Stack>
    </Stack>
  );
}
