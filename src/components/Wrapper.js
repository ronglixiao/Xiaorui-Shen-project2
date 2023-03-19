import { Paper } from "@mui/material";
import { styled } from "@mui/system";

const Wrapper = styled(Paper)({
  padding: "1.5rem",
  margin: "1rem auto",
  maxWidth: "800px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.3rem",
  borderRadius: "1rem",
});

export default Wrapper;
