import { Box, Button, Grid2, Typography } from "@mui/material";
import React from "react";

function RightContainer() {
  const places = [
    "Taj Mahal",
    "Jaipur Palace",
    "Gateway of India",
    "Mysore Palace",
    "Charminar",
    "Marine Drive",
    "Hawa Mahal",
    "Ellora Caves",
  ];

  return (
    <Grid2
      sx={{
        display: { sx: "none", sm: "none", md: "block" },
        flex: "1",
        position: "sticky",
        top: "10%",
        right: 0,
        padding: 2,
        height: "80vh",
        width: "250px",
        border: "1px solid #D3D3D3 ",
        borderRadius: "5px",
      }}
    >
      <Typography variant="h6" marginBottom="1.5em" sx={{ fontWeight: "bold" }}>
        Follow These Places
      </Typography>

      {places.map((place, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 2,
          }}
        >
          <Typography variant="body1">{place}</Typography>
          <Button variant="outlined" size="small">
            Follow
          </Button>
        </Box>
      ))}
    </Grid2>
  );
}

export default RightContainer;
