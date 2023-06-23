import "./App.css";
import Homepage from "./Components/Homepage";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DocInLag from "./Components/DocInLag";
import SuccessBooking from "./Component2/SuccessBooking";
import { Payment } from "./Component2/Payment";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="Login" element={<DocInLag />} />
        <Route path="OurServices" element={<SuccessBooking />} />
        <Route path="SignUp" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
