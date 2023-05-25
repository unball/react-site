import { Typography, Box } from "@mui/material";
import { TITLE } from "../../Text";

export function TitlePage() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        marginTop: "52px",
        marginBottom: "72px",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          color: "text.main",
          fontWeight: 700,
          fontSize: { sm: "50px", md: "56px", lg: "70px" },
        }}
      >
        {TITLE}
      </Typography>
    </Box>
  );
}
