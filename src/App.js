import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Rugdemo from "./pages/Rugdemo";
import MultiSurface from "./pages/MultiSurface";
import Rugs from "./pages/Rugs";
import MultiSurfaceRoom from "./pages/MultiSurfaceRoom";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/rugdemo" element={<Rugdemo />} />
      <Route path="/rugdemo/room" element={<Rugs />} />/
      <Route path="/multisurface_demo" element={<MultiSurface />} />
      <Route path="/multisurface_demo/room" element={<MultiSurfaceRoom />} />
    </Routes>
  );
}

export default App;
