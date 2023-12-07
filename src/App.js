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
import LicensesPage from "./licenses";
import OurTeamPage from "./ourteampage";
import BlogPage from "./blogpage";
import BlogNews from "./blognews";
import TransportingProject from "./transportingproject";
import ProjectAirCargo from "./projectaircargo";
import ServicesPage from "./servicespage";
import ServiceSingle from "./servicesingle";

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
          <Route path="/licenses" element={<LicensesPage/>}></Route>
          <Route path="/ourteam" element={<OurTeamPage/>}></Route>
          <Route path="/blog" element={<BlogPage/>}></Route>
          <Route path="/blog/blognews" element={<BlogNews/>}></Route>
          <Route path="/ourproject" element={<TransportingProject/>}></Route>
          <Route path="/ourproject/aircargo" element={<ProjectAirCargo/>}></Route>
          <Route path="/service" element={<ServicesPage/>}></Route>
          <Route path="/servicesingle" element={<ServiceSingle/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
