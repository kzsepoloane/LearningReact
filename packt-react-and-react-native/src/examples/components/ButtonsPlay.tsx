import { Android } from "@mui/icons-material";
import { Button, IconButton, Stack } from "@mui/material";
import { useState } from "react";

type ButtonColor = "primary" | "secondary";

const toggleColor = (color: ButtonColor): ButtonColor => {
  return color === "primary" ? "secondary" : "primary";
};
const ButtonsPlay = () => {
  const [color, setColor] = useState<ButtonColor>("secondary");
  return (
    <Stack direction="row" spacing={2}>
      <Button
        variant="contained"
        color={color}
        onClick={() => setColor(toggleColor(color))}
      >
        Contained
      </Button>
      <Button color={color} onClick={() => setColor(toggleColor(color))}>
        Text
      </Button>
      <Button
        variant="outlined"
        color={color}
        onClick={() => setColor(toggleColor(color))}
      >
        Outlined
      </Button>
      <IconButton color={color} onClick={() => setColor(toggleColor(color))}>
        <Android />
      </IconButton>
    </Stack>
  );
};

export default ButtonsPlay;
