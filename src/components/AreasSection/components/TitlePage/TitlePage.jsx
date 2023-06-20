import { Typography, Stack } from "@mui/material";
import { TITLE } from "../../Text";

export function TitlePage() {
  return (
    <Stack width="100%" justifyContent="center" direction="row">
      <Typography
        variant="h3"
        color="text.main"
        fontWeight="700"
      >
        {TITLE}
      </Typography>
    </Stack>
  );
}
