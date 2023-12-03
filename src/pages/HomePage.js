import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AppBar from "../components/AppBar/AppBar";
import SearchBar from "../components/SearchBar/SearchBar";
import FilterSidePanel from "../components/FilterSidePanel/FilterSidePanel";
import ProductListingContainer from "../components/ProductListing/ProductListing";

const HomePage = () => {
  const initialFilters = {
    color: [],
    gender: [],
    price: [],
    type: [],
  };

  const [filtersApplied, setFiltersApplied] = useState(initialFilters);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [isSearchApplied, setIsSearchApplied] = useState(false);
  const [isFilterApplied, setIsFilterApplied] = useState(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <AppBar />
        </Grid>
        <Grid item xs={12}>
          <SearchBar
            filteredProducts={filteredProducts}
            setFilteredProducts={setFilteredProducts}
            products={products}
            isSearchApplied={isSearchApplied}
            setIsSearchApplied={setIsSearchApplied}
            isFilterApplied={isFilterApplied}
            setIsFilterApplied={setIsFilterApplied}
            filtersApplied={filtersApplied}
            setFiltersApplied={setFiltersApplied}
            initialFilters={initialFilters}
          />
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {!isSearchApplied && (
              <FilterSidePanel
                filtersApplied={filtersApplied}
                setFiltersApplied={setFiltersApplied}
                isFilterApplied={isFilterApplied}
                setIsFilterApplied={setIsFilterApplied}
              />
            )}
            <ProductListingContainer
              filtersApplied={filtersApplied}
              filteredProducts={filteredProducts}
              setFilteredProducts={setFilteredProducts}
              products={products}
              setProducts={setProducts}
              setFiltersApplied={setFiltersApplied}
              initialFilters={initialFilters}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;
