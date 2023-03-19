import { Box } from "@mui/system";
import { styled } from "@mui/system";

const StyledLetter = styled(Box)(({ theme, color }) => ({
  color: "#ffffff",
  backgroundColor: color,
  padding: theme.spacing(0.5),
  margin: theme.spacing(0.5),
  borderRadius: "4px",
  width: "50px",
  height: "50px",
  fontSize: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export default StyledLetter;
