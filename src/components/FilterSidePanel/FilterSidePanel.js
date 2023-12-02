import React from "react";
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

const FilterSidePanel = () => {
  const initialFilters = {
    color: [],
    gender: [],
    price: [],
    type: [],
  };

  const [filtersAplied, setFiltersAplied] = React.useState(initialFilters);

  const handleChange = (event) => {};

  const FILTERS = {
    color: ["Red", "Blue", "Green"],
    gender: ["Men", "Women"],
    price: ["0 - Rs250", "Rs251 - 450", "Rs451 and above"],
    type: ["Polo", "Hoodie", "Basic"],
  };

  return (
    <Box>
      <Card sx={{ minWidth: "max-content", height: "70vh", overflowY: "auto" }}>
        <CardContent>
          <FilterGroup fields={FILTERS.color} criteria="Colour" />
          <hr />
          <FilterGroup fields={FILTERS.gender} criteria="Gender" />
          <hr />
          <FilterGroup fields={FILTERS.price} criteria="Price" />
          <hr />
          <FilterGroup fields={FILTERS.type} criteria="Type" />
        </CardContent>
      </Card>
    </Box>
  );
};

export default FilterSidePanel;
