import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const FilterSidePanel = () => {
  const FILTERS = {
    COLOUR: ["Red", "Blue", "Green"],
    GENDER: ["Men", "Women"],
    PRICE: ["0 - Rs250", "Rs251 - 450", "Rs451 and above"],
    TYPE: ["Polo", "Hoodie", "Basic"],
  };

  const getFilters = () => {
    const filters = [];
    for (let key in FILTERS) {
      filters.push(
        <Typography color="text.primary" key={key} gutterBottom>
          {key}
        </Typography>
      );
      filters.push(
        ...FILTERS[key].map((filter) => (
          <Typography color="text.secondary" key={filter} gutterBottom>
            {filter}
          </Typography>
        ))
      );
    }
    return filters;
  };

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>{getFilters()}</CardContent>
    </Card>
  );
};

export default FilterSidePanel;
