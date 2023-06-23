import "./App.css";
import SignupSuccess from "./Component/SignupSuccess";
import PpMyAppointment from "./Component/PpMyAppointment";
import SignupPage from "./Component/SignupPage";
import GeneralPractitioner from "./Component/GeneralPractitioner";
import BrowseSpacialities from "./Component/BrowseSpacialities";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/SignupSuccess" element={<SignupSuccess />} />
          <Route path="/SignupPage" element={<SignupPage />} />
          <Route
            path="/GeneralPractitioner"
            element={<GeneralPractitioner />}
          />
          <Route path="/BrowseSpacialities" element={<BrowseSpacialities />} />
          <Route path="/PpMyAppointment" element={<PpMyAppointment />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
