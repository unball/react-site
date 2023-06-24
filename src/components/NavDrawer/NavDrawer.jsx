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
        <Box
          onClick={handleDrawerToggle}
          sx={{
            textAlign: "center",
            backgroundColor: "backgroundLight.main",
            height: "100%",
          }}
        >
          <Icon sx={{ my: 2 }}>
            <img style={{ height: "100%" }} src={HeaderLogo} alt="" />
          </Icon>
          <Divider />
          <List>
            {menuItens.map((item) => {
              if (item.style)
                return (
                  <a
                    href={item.href}
                    style={{ textDecoration: "none" }}
                    key={item.title}
                  >
                    <ListItem disablePadding>
                      <ListItemButton
                        sx={{
                          textAlign: "center",
                          backgroundColor: "link.main",
                          borderRadius: 3,
                        }}
                      >
                        <ListItemText
                          primaryTypographyProps={{
                            color: "text.main",
                            fontWeight: "700",
                          }}
                          primary={item.title}
                        />
                      </ListItemButton>
                    </ListItem>
                  </a>
                );
              return (
                <a
                  href={item.href}
                  style={{ textDecoration: "none" }}
                  key={item.title}
                >
                  <ListItem disablePadding>
                    <ListItemButton sx={{ textAlign: "center" }}>
                      <ListItemText
                        primaryTypographyProps={{
                          color: "text.main",
                          fontWeight: "700",
                        }}
                        primary={item.title}
                      />
                    </ListItemButton>
                  </ListItem>
                </a>
              );
            })}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
