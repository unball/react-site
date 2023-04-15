import React from "react";
import { AppBar, Box, Button, Icon, IconButton, Toolbar } from "@mui/material";
import { Menu } from "@mui/icons-material";

import HeaderLogo from "../../assets/logo_header.svg";

import { useSiteContext } from "../../contexts/SiteContext";

export function NavBar() {
  const { mobileOpen, setMobileOpen, menuItens } = useSiteContext();

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  return (
    <AppBar position="fixed" component="nav" color="background">
      <Toolbar>
        <IconButton
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
          color="text"
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
          {menuItens.map((item) => {
            if (item.style)
              return (
                <Button
                  key={item.title}
                  variant="contained"
                  color="link"
                  sx={{ color: "#fff", textTransform: "none" }}
                >
                  {item.title}
                </Button>
              );
            return (
              <Button
                key={item.title}
                variant="text"
                sx={{ color: "#fff", textTransform: "none" }}
              >
                {item.title}
              </Button>
            );
          })}
        </Box>
      </Toolbar>
    </AppBar>
  );
}