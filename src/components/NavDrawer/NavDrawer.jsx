import React from "react";
import {
  Box,
  Divider,
  Drawer,
  Icon,
  ListItem,
  ListItemButton,
  ListItemText,
  List,
} from "@mui/material";

import HeaderLogo from "../../assets/logo_header.svg";

import { useSiteContext } from "../../contexts/SiteContext";

const drawerWidth = 240;

export function NavDrawer() {
  const { mobileOpen, setMobileOpen, menuItens } = useSiteContext();

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  return (
    <Box component="nav">
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
          <Icon sx={{ my: 2 }}>
            <img style={{ height: "100%" }} src={HeaderLogo} alt="" />
          </Icon>
          <Divider />
          <List>
            {menuItens.map((item) => {
              if (item.style)
                return (
                  <ListItem key={item.title} disablePadding>
                    <ListItemButton sx={{ textAlign: "center" }}>
                      <ListItemText primary={item.title} />
                    </ListItemButton>
                  </ListItem>
                );
              return (
                <ListItem key={item.title} disablePadding>
                  <ListItemButton sx={{ textAlign: "center" }}>
                    <ListItemText primary={item.title} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
