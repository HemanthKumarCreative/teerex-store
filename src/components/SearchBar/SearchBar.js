import React, { useState, useEffect } from "react";
import { Box, TextField, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Chip from "@mui/material/Chip";

const SearchBar = ({
  filteredProducts,
  setFilteredProducts,
  products,
  setIsSearchApplied,
  isSearchApplied,
  isFilterApplied,
  setIsFilterApplied,
  filtersApplied,
  setFiltersApplied,
  initialFilters,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState([]);
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };
  useEffect(() => {
    setFilters(Object.values(filtersApplied).flat());
  }, [filtersApplied]);

  useEffect(() => {
    if (filters.length === 0) {
      setIsFilterApplied(false);
    }
  }, [filters]);

  const handleSearch = () => {
    const searchResult = filteredProducts.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(searchResult);
    setIsSearchApplied(true);
  };

  const handleSearchDelete = () => {
    setIsSearchApplied(false);
    setSearchQuery("");
    setFilteredProducts(products);
  };

  const handleFilterDelete = () => {
    window.location.reload(false);
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
          onDelete={handleSearchDelete}
          color="secondary"
          size="small"
        />
      )}
      {isFilterApplied && filters?.length > 0 && (
        <Chip
          label={`Filters Applied: ${filters.join(", ")}`}
          variant="outlined"
          onDelete={handleFilterDelete}
          color="secondary"
          size="small"
        />
      )}
      {!isFilterApplied && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField
            label="Search for Products"
            variant="standard"
            onChange={handleChange}
            value={searchQuery}
          />
          <IconButton
            onClick={handleSearch}
            disabled={searchQuery.trim() === ""}
          >
            <SearchIcon />
          </IconButton>
        </Box>
      )}
    </Box>
  );
};

export default SearchBar;
