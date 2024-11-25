import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

const MySelect = () => {
  const [value, setValue] = useState("First");
  return (
    <FormControl>
      <InputLabel id="select-label">My Select</InputLabel>
      <Select
        labelId="select-label"
        id="select"
        value={value}
        label="My Select"
        onChange={(e) => setValue(e.target.value)}
        inputProps={{ id: "my-select" }}
      >
        <MenuItem value="First">First</MenuItem>
        <MenuItem value="Second">Second</MenuItem>
        <MenuItem value="Third">Third</MenuItem>
      </Select>
    </FormControl>
  );
};

export default MySelect;
