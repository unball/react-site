import { Typography } from "@mui/material";

export function TitlePage() {
  return (
    <Typography
      variant="h3"
      fontWeight="700"
      gutterBottom
      align="center"
      sx={{
        paddingTop: "30px",
        textShadow: "0 0 6px rgba(0, 0, 0, 0.1)",
      }}
      color="link.main"
    >
      {" "}
      Trainee UnBall{" "}
    </Typography>
  );
}
