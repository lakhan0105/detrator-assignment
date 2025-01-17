import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

function SingleCard({
  id,
  title,
  address,
  distance,
  attractions,
  other,
  price,
  rating,
  img,
}) {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "column", md: "row" },
        gap: "1em",
        padding: "15px",
        boxShadow: "none",
        border: "1px solid #D3D3D3",
        background: "transparent",
        marginBottom: "1.5em",
      }}
    >
      {/* CARD IMAGE */}
      <CardMedia
        component="img"
        height="250"
        sx={{
          width: { xs: "100%", sm: "100%", md: "250px" },
          objectFit: "cover",
          borderRadius: "5px",
        }}
        image={img}
      ></CardMedia>

      {/* CARD CONTENT */}
      <Box
        sx={{
          paddingY: "2px",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#4d4de8" }}>
          {title}
        </Typography>

        {/* links container */}
        <Box
          sx={{
            marginTop: "5px",
            display: "flex",
            alignItems: "flex-end",
            gap: "1em",
          }}
        >
          <Typography
            sx={{
              fontSize: "12px",
              color: "#4d4de8",
              textDecoration: "underline",
            }}
          >
            {address}
          </Typography>

          <Typography sx={{ fontSize: "12px" }}>{distance}</Typography>
        </Box>

        {/* RATING */}
        <Button
          size="small"
          sx={{
            marginTop: "14px",
            background: "#388E3C",
            color: "#fff",
            padding: "1px 10px",
            textTransform: "capitalize",
          }}
        >
          Rating - {rating}
        </Button>

        {/* more info */}
        <Box>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: "bold",
              marginTop: "12px",
              marginBottom: "auto",
            }}
          >
            {attractions}
          </Typography>
          <Typography
            sx={{
              fontSize: "12px",
              marginTop: "8px",
              fontWeight: "bold",
              color: "red",
            }}
          >
            {other}
          </Typography>
        </Box>

        <Typography variant="h6" sx={{ marginTop: "4px" }}>
          {price}
        </Typography>
      </Box>
    </Card>
  );
}

export default SingleCard;
