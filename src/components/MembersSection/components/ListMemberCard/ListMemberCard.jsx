import React from "react";
import { Stack, Box } from "@mui/material";
import { listPaths } from "../../../../assets/avatar/index";
import { MemberCard } from "../MemberCard";

export function ListMemberCard() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      width="90%"
      padding="30px"
    >
      {listPaths.map((item) => {
        if (item?.captain === true) {
          return (
            <Box marginTop="40px">
              <MemberCard key={item.name} item={item} />
            </Box>
          );
        }
        return <></>;
      })}

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 4, md: 10 }}
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
      >
        {listPaths.map((item) => {
          if (!item.captain) {
            return <MemberCard key={item.name} item={item} />;
          }
          return <></>;
        })}
      </Stack>
    </Box>
  );
}