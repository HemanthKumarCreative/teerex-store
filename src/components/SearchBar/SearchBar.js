import React from "react";
import { Box, TextField, IconButton, Icon } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <TextField label="Search for Products" variant="standard" />
      <IconButton>
        <SearchIcon />
      </IconButton>
    </Box>
  );
};

export default SearchBar;
