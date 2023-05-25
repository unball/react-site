import { Box, Stack, Typography } from "@mui/material";

export function CardAreas({ item }) {
  return (
    <Stack
      width="310px"
      height="100%"
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="center"
      padding="10px"
    >
      <Box
        width="80px"
        height="80px"
        marginTop="20px"
        marginBottom="20px"
        justifyContent="center"
        alignItems="center"
      >
        {item.icon}
      </Box>
      <Stack
        direction={{ xs: "column", md: "column" }}
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          color="text.main"
          fontWeight="700"
          textAlign="center"
          sx={{
            fontSize: { sm: "15px", md: "24px", lg: "30px" },
            marginBottom: "40px",
          }}
        >
          {item.title}
        </Typography>
        <Typography
          color="text.main"
          fontWeight="400"
          textAlign="center"
          sx={{
            fontSize: { sm: "10px", md: "18px", lg: "20px" },
            marginBottom: "20px",
            lineHeight: "25px",
          }}
        >
          {item.description}
        </Typography>
      </Stack>
    </Stack>
  );
}
