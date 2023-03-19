import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GamePage from "./pages/GamePage";
import RulesPage from "./pages/RulesPage";
import NavBar from "./components/NavBar";
import Container from "@mui/material/Container";
import WordleContextProvider from "./contexts/WordleContextProvider";

function App() {
  return (
    <WordleContextProvider>
      <NavBar />
      <Container maxWidth="sm" className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/game/:difficulty" element={<GamePage />} />
          <Route path="/rules" element={<RulesPage />} />
        </Routes>
      </Container>
    </WordleContextProvider>
  );
}

export default App;
