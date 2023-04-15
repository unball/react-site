import React, { useState } from "react";
import { AppBar, Box, Button, Icon, IconButton, Toolbar } from "@mui/material";
import { Menu } from "@mui/icons-material";

import HeaderLogo from "../../assets/logo_header.svg";

const menuItens = [
  { title: "Início", href: "" },
  { title: "Competições", href: "" },
  { title: "Áreas", href: "" },
  { title: "Membros", href: "" },
  { title: "Contato", href: "" },
  { title: "Seja um apoiador", href: "" },
];

export function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  return (
    <AppBar position="fixed" component="nav">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <Menu />
        </IconButton>
        <Icon
          component="div"
          sx={{
            flexGrow: 1,
            display: { xs: "none", sm: "block" },
            textAlign: "left",
          }}
        >
          <img style={{ height: "100%" }} src={HeaderLogo} alt="" />
        </Icon>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {menuItens.map((item) => (
            <Button key={item.title} variant="text" sx={{ color: "#fff", textTransform: 'none' }}>
              {item.title}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
