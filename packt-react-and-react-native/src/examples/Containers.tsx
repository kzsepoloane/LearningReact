import Typography, { TypographyProps } from "@mui/material/Typography";
import Container from "@mui/material/Container";

const MyApp = () => {
  const textStyle: TypographyProps = {
    sx: {
      backgroundColor: "#cfe8fc",
      margin: 1,
      textAlign: "center",
    },
  };
  return (
    <>
      <Container maxWidth="sm">
        <Typography {...textStyle}>Hello World &quot; sm &quot; </Typography>
      </Container>
      <Container maxWidth="md">
        <Typography {...textStyle}>Hello World &quot; md &quot;</Typography>
      </Container>
      <Container maxWidth="lg">
        <Typography {...textStyle}>Hello World &quot; lg &quot;</Typography>
      </Container>
    </>
  );
};

export default MyApp;
