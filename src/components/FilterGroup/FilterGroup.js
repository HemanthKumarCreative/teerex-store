import * as React from "react";
import Box from "@mui/material/Box";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function CheckboxesGroup({
  fields,
  criteria,
  filtersAplied,
  setFiltersAplied,
}) {
  const initialFields = fields.reduce((obj, field) => {
    obj[field] = false;
    return obj;
  }, {});

  const [filter, setFilter] = React.useState(initialFields);
  const handleChange = (event) => {
    setFilter({
      ...filter,
      [event.target.name]: event.target.checked,
    });
  };

  React.useEffect(() => {
    setFiltersAplied({
      ...filtersAplied,
      [criteria.toLowerCase()]: Object.keys(filter).filter(
        (value) => filter[value] === true
      ),
    });
  }, [filter]);

  return (
    <Box sx={{ display: "flex" }}>
      <FormControl component="fieldset" variant="standard">
        <FormLabel component="legend">{criteria}</FormLabel>
        <FormGroup>
          {fields.map((field) => (
            <FormControlLabel
              control={
                <Checkbox
                  checked={filter[field]}
                  onChange={handleChange}
                  name={field}
                />
              }
              label={field}
              key={field}
            />
          ))}
        </FormGroup>
      </FormControl>
    </Box>
  );
}
