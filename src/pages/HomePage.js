import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import AppBar from "../components/AppBar/AppBar";
import SearchBar from "../components/SearchBar/SearchBar";
import FilterSidePanel from "../components/FilterSidePanel/FilterSidePanel";
import ProductListingContainer from "../components/ProductListing/ProductListing";

const HomePage = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <AppBar />
        </Grid>
        <Grid item xs={12}>
          <SearchBar />
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <FilterSidePanel />
            <ProductListingContainer />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;
