import { Box, Grid, Stack, Typography } from "@mui/material";

export function CardAreas({ item }) {
  return (
    <Grid item xs={2}>
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
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
        <Typography
          color="text.main"
          fontWeight="700"
          textAlign="center"
          variant="h5"
          sx={{
            marginBottom: "40px",
          }}
        >
          {item.title}
        </Typography>
        <Typography
          color="text.main"
          fontWeight="400"
          textAlign="center"
          variant="body1"
          sx={{
            marginBottom: "20px",
            lineHeight: "25px"
          }}
        >
          {item.description}
        </Typography>
      </Stack>
    </Grid>
  );
}
