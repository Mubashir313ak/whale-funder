import { Stack } from "@mui/material";
import Navbar from "./components/navbar";
import HeroSection from "./screens/hero";
import CustomGrid from "./components/custom";
import Trading from "./screens/trading";
import Objective from "./screens/objectives";
function App() {
  return (
  <>
  <Navbar/>
  <HeroSection/>
  <CustomGrid />
  <Trading/>
  <Objective/>
  </>
  );
}

export default App;
