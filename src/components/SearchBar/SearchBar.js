import React, { useState, useEffect } from "react";
import { Box, TextField, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Chip from "@mui/material/Chip";

const SearchBar = ({ filteredProducts, setFilteredProducts, products }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchApplied, setIsSearchApplied] = useState(false);

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    const searchResult = filteredProducts.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(searchResult);
    setIsSearchApplied(true);
  };

  const handleDelete = () => {
    setIsSearchApplied(false);
    setSearchQuery("");
    setFilteredProducts(products);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "baseline",
        width: "80vw",
      }}
    >
      {isSearchApplied && (
        <Chip
          label={`Search Query Applied: ${searchQuery}`}
          variant="outlined"
          onDelete={handleDelete}
          color="secondary"
          size="small"
        />
      )}
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <TextField
          label="Search for Products"
          variant="standard"
          onChange={handleChange}
          value={searchQuery}
        />
        <IconButton onClick={handleSearch}>
          <SearchIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default SearchBar;
