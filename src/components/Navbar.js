import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  TextField,
  IconButton,
  Button,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";

function Navbar() {
  return (
    <AppBar
      position="fixed"
      sx={{
        background: "#fff",
        color: "black",
        boxShadow: "0",
        borderBottom: "1px solid #D3D3D3",
      }}
    >
      {/* NAVBAR */}
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* LOGO */}
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Detrator
        </Typography>

        {/* SEARCH BOX */}
        <Box
          sx={{
            display: { xs: "none", sm: "flex", md: "flex" },
            alignItems: "center",
            justifyContent: "start",
            border: "1px solid #D3D3D3",
            borderRadius: "20px",
            paddingX: "10px",
          }}
        >
          <SearchIcon sx={{ color: "gray" }} />

          <TextField
            variant="outlined"
            placeholder="Search"
            size="small"
            sx={{
              width: "350px",
              borderRadius: "25px",
              "& fieldset": { border: "none" },
            }}
          ></TextField>
        </Box>

        {/* USER PROFILE */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Button size="small" sx={{ padding: "2px 10px" }}>
            <AccountCircle sx={{ fontSize: "40px" }} />
            <Typography sx={{ fontWeight: "500", fontSize: "16px" }}>
              John
            </Typography>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
