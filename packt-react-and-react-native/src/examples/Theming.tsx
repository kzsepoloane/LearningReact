import styled from "@emotion/styled";
import { Button, Menu, MenuItem, Theme, useTheme } from "@mui/material";

const StyledButton = styled(Button)(({ theme }: { theme: Theme }) => ({
  "&.MuiButton-root": {
    margin: theme.spacing(1),
  },
  "&.MuiButton-contained": {
    borderRadius: 50,
  },
  "&.MuiButton-sizeSmall": {
    fontWeight: theme.typography.fontWeightLight,
  },
}));

const Theming = () => {
  const theme = useTheme();
  return (
    <>
      <StyledButton theme={theme}>First</StyledButton>
      <StyledButton theme={theme} variant="contained">
        Second
      </StyledButton>
      <StyledButton size="small" variant="outlined" theme={theme}>
        Third
      </StyledButton>
      <Menu anchorEl={document.body} open>
        <MenuItem>First</MenuItem>
        <MenuItem>Second</MenuItem>
        <MenuItem>Third</MenuItem>
      </Menu>
    </>
  );
};

export default Theming;
