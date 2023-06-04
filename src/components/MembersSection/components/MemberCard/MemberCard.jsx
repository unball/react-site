import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { Image } from "mui-image";

export function MemberCard({ item }) {
  return (
    <Grid item xs={3}>
      <Stack direction="column" justifyContent="center" alignItems="center">
        <Box
          sx={{
            width: "170px",
            height: "170px",
            marginTop: "5px",
          }}
        >
          <Image
            alt={`Foto de ${item.name}`}
            src={item.path}
            sx={{
              width: "162px",
              height: "162px",
              borderRadius: "100px",
              border: "3px solid #FFFFFF",
            }}
            alignSelf="center"
          />
        </Box>
        <Stack
          width="100%"
          justifyContent="center"
          direction="column"
          alignItems="center"
        >
          {item?.captain && (
            <Typography
              variant="h5"
              color="link.main"
              sx={{
                fontWeight: 500,
                marginTop: "20px",
                lineHeight: "2px",
              }}
            >
              Capitania
            </Typography>
          )}
          <Typography
            variant="body1"
            color="text.light"
            sx={{
              fontWeight: 700,
              marginTop: "10px",
              marginBottom: "0",
            }}
          >
            {item.name}
          </Typography>
          <Typography
            variant="body2"
            color="text.dark"
            sx={{
              fontWeight: 400,
              marginTop: "0",
              marginBottom: "30px",
              lineHeight: "10px",
            }}
          >
            {item.degree}
          </Typography>
        </Stack>
      </Stack>
    </Grid>
  );
}
