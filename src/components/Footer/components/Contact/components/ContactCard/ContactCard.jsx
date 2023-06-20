import React from "react";
import { Button, Typography, Snackbar, IconButton, Stack } from "@mui/material";
import { Close } from "@mui/icons-material";

export function ContactCard({ icon, link, fullLink }) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  function handleOnClick() {
    if (!fullLink) {
      navigator.clipboard.writeText(link);
      handleClick();
    } else {
      window.open(fullLink, "_blank");
    }
  }

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <Close fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <Stack direction="row">
      <Button
        variant="text"
        heigth="36px"
        color="link"
        gap="10px"
        onClick={handleOnClick}
        sx={{ textTransform: "none" }}
      >
        {icon}
        <Typography color="text.main" variant="body2" sx={{ marginLeft: 1 }}>
          {link}
        </Typography>
      </Button>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="E-mail copiado!"
        action={action}
      />
    </Stack>
  );
}
