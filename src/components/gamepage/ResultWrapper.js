import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

const ResultWrapper = styled(Box)({
  padding: "2rem",
  margin: "2rem auto",
  maxWidth: "800px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "1rem",
  borderRadius: "1rem",
  backgroundColor: "#f5f5f5",
});

export default ResultWrapper;
