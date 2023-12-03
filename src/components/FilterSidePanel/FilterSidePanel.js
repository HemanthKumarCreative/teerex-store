import React, { useState, useEffect } from "react";
import {
  Card,
  Box,
  CardContent,
  Typography,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import FilterGroup from "../FilterGroup/FilterGroup";

const FilterSidePanel = ({
  filtersApplied,
  setFiltersApplied,
  isFilterApplied,
  setIsFilterApplied,
}) => {
  const FILTERS = {
    color: ["Red", "Blue", "Green"],
    gender: ["Men", "Women"],
    price: ["0 - Rs250", "Rs251 - 450", "Rs451 and above"],
    type: ["Polo", "Hoodie", "Basic"],
  };

  return (
    <Box>
      <Card sx={{ minWidth: "max-content", height: "75vh", overflowY: "auto" }}>
        <CardContent>
          <FilterGroup
            fields={FILTERS.color}
            criteria="color"
            filtersAplied={filtersApplied}
            setFiltersAplied={setFiltersApplied}
            setIsFilterApplied={setIsFilterApplied}
            isFilterApplied={isFilterApplied}
          />
          <hr />
          <FilterGroup
            fields={FILTERS.gender}
            criteria="Gender"
            filtersAplied={filtersApplied}
            setFiltersAplied={setFiltersApplied}
            setIsFilterApplied={setIsFilterApplied}
            isFilterApplied={isFilterApplied}
          />
          <hr />
          <FilterGroup
            fields={FILTERS.price}
            criteria="price"
            filtersAplied={filtersApplied}
            setFiltersAplied={setFiltersApplied}
            setIsFilterApplied={setIsFilterApplied}
            isFilterApplied={isFilterApplied}
          />
          <hr />
          <FilterGroup
            fields={FILTERS.type}
            criteria="type"
            filtersAplied={filtersApplied}
            setFiltersAplied={setFiltersApplied}
            setIsFilterApplied={setIsFilterApplied}
            isFilterApplied={isFilterApplied}
          />
        </CardContent>
      </Card>
    </Box>
  );
};

export default FilterSidePanel;
