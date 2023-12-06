import "./App.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import HomePage from "./homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./aboutUs";
import ConatctPage from "./contact";
import PricingPage from "./pricing";
import ProtectionPage from "./protection";
import ChangeLog from "./changelog";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/aboutus" element={<AboutUs />}></Route>
          <Route path="/contact" element={<ConatctPage />}></Route>
          <Route path="/pricing" element={<PricingPage />}></Route>
          <Route path="/protection" element={<ProtectionPage />}></Route>
          <Route path="/changelog" element={<ChangeLog/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
