import {
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import { useState } from "react";

const ToggleControls = () => {
  const [checkbox, setCheckbox] = useState(false);
  const [radio, setRadio] = useState("First");
  return (
    <div>
      <FormControlLabel
        label={`Checkbox ${checkbox ? "checked" : "not checked"}`}
        control={
          <Checkbox
            checked={checkbox}
            onChange={() => setCheckbox(!checkbox)}
          />
        }
      />
      <FormControl component={"fieldset"}>
        <FormLabel component={"legend"}>{`Radio ${radio}`}</FormLabel>
        <RadioGroup value={radio} onChange={(e) => setRadio(e.target.value)}>
          <FormControlLabel value="First" label="First" control={<Radio />} />
          <FormControlLabel value="Second" label="Second" control={<Radio />} />
          <FormControlLabel value="Third" label="Third" control={<Radio />} />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default ToggleControls;
