import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/index.css";
import Home from "./components/Home";
import ResourceLinks from "./components/ResourceLinks";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resourcelinks" element={<ResourceLinks />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
