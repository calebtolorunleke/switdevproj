import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Component/Homepage";
import Fail from "./Component/Fail";
import List from "./Component/List";
import Success from "./Component/Sucess";
import Login from "./Component/Login";
import Logincess from "./Component/Logincess";

const App = () => {
  const style = {
    fontFamily: "Poppins, sans-serif",
    fontSize: "16px",
    fontWeight: "400",
    backgroundColor: "#EBF5F6",
  };

  return (
    <div style={style}>
      <BrowserRouter>
        <List />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="Services" element={<Fail />} />
          <Route path="Success" element={<Success />} />
          <Route path="Login" element={<Login />} />
          <Route path="ccess" element={<Logincess />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
