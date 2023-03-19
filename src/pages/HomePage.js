import BasicList from "../components/homepage/BasicList";
import { Box } from "@mui/system";

function HomePage() {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1 style={{ marginBottom: "1rem" }}>Welcome to Wordle!</h1>
      <BasicList />
    </Box>
  );
}

export default HomePage;
