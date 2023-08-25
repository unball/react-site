import React from "react";
import { Stack } from "@mui/material";
import { TitlePage } from "./components/TitlePage";
import { ListMemberCard } from "./components/ListMemberCard";

export function MembersSection() {
  return (
    <Stack
      id="members"
      height="fit-content"
      w="100%"
      paddingLeft={{ xs: 1, sm: 0 }}
      direction={{ xs: "column", sm: "row" }}
      sx={{ backgroundColor: "background.main" }}
      paddingTop={10}
      alignItems="flex-start"
      justifyContent="center"
      flexWrap="wrap"
    >
      <TitlePage />
      <ListMemberCard />
    </Stack>
  );
}
