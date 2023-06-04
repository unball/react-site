import React from "react";
import { Stack, Box, Grid } from "@mui/material";
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
      {listPaths
        .filter((item) => item.captain)
        .map((item) => {
          return (
            <Box marginTop="40px" key={Math.random()}>
              <MemberCard item={item} />
            </Box>
          );
        })}

      <Grid container 
        spacing={{ xs: 1, sm: 2 }}
        columns={{ xs: 3, sm: 6, md: 9, lg: 12 }}
        justifyContent="center"
      >
        {listPaths
          .filter((item) => !item.captain)
          .map((item) => {
            return <MemberCard key={Math.random()} item={item} />;
          })}
      </Grid>
    </Box>
  );
}
