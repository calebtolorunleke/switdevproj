import "./App.css";
import Homepage from "./Components/Homepage";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import DocInLag from "./Components/DocInLag";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="Login" element={<DocInLag />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
