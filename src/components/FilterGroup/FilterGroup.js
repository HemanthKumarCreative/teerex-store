import * as React from "react";
import Box from "@mui/material/Box";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function CheckboxesGroup({ fields, criteria }) {
  const colourObject = fields.reduce((obj, colour) => {
    obj[colour] = false;
    return obj;
  }, {});
  const [state, setState] = React.useState(colourObject);
  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <Box sx={{ display: "flex" }}>
      <FormControl component="fieldset" variant="standard">
        <FormLabel component="legend">{criteria}</FormLabel>
        <FormGroup>
          {fields.map((colour) => (
            <FormControlLabel
              control={
                <Checkbox
                  checked={state[colour]}
                  onChange={handleChange}
                  name={colour}
                />
              }
              label={colour}
              key={colour}
            />
          ))}
        </FormGroup>
      </FormControl>
    </Box>
  );
}
