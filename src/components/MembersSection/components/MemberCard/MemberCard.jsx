import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Image } from "mui-image";

export function MemberCard({ item }) {
  return (
    <Stack direction="column" justifyContent="center" alignItems="center">
      <Box
        sx={{
          width: "170px",
          height: "170px",
          marginTop: "5px",
        }}
      >
        <Image
          alt={item.name}
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
            sx={{
              color: "#EF6F1E",
              fontWeight: 500,
              fontSize: { sm: "10px", md: "15px", lg: "18px" },
              marginTop: "20px",
              lineHeight: "2px",
            }}
          >
            Capitania
          </Typography>
        )}

        <Typography
          variant="subtitle1"
          sx={{
            color: "#E1E1E6",
            fontWeight: 700,
            fontSize: { sm: "10px", md: "15px", lg: "27px" },
            marginTop: "10px",
            marginBottom: "0",
          }}
        >
          {item.name}
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{
            color: "#9C9CA1",
            fontWeight: 500,
            fontSize: { sm: "10px", md: "15px", lg: "14px" },
            marginTop: "0",
            marginBottom: "30px",
            lineHeight: "0px",
          }}
        >
          {item.degree}
        </Typography>
      </Stack>
    </Stack>
  );
}
