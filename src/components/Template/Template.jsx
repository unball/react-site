import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import HeaderLogo from "../../assets/logo_header.svg";

const menuItens = [
  { title: "Início", href: "" },
  { title: "Competições", href: "" },
  { title: "Áreas", href: "" },
  { title: "Membros", href: "" },
  { title: "Contato", href: "" },
  { title: "Seja um apoiador", href: "" },
];

export function Template({ children }) {
  return (
    <Box width="100%">
      <Grid
        container
        sx={{ backgroundColor: "#202024" }}
        direction="row"
        height="80px"
      >
        <img src={HeaderLogo} />
        {menuItens.map((e) => (
          <Grid item xs={1}>
            <Link href={e.href}>
              <Typography
                variant="subtitle1"
                width="fit-content"
                color="#E1E1E6"
              >
                {e.title}
              </Typography>
            </Link>
          </Grid>
        ))}
      </Grid>
      {children}
    </Box>
  );
}
