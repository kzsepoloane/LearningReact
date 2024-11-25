import { TextField } from "@mui/material";
import { useState } from "react";

const MyTextInput = () => {
  const [value, setValue] = useState("");
  return (
    <TextField
      label="Name"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      margin="normal"
    />
  );
};
export default MyTextInput;
