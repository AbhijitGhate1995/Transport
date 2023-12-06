import "./App.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import HomePage from "./homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./aboutUs";
import ConatctPage from "./contact";

function App() {
  return (
    <div>
 <BrowserRouter>
 <Routes>
 <Route path="/" element={<HomePage/>}></Route>
 <Route path="/aboutus" element={<AboutUs/>}></Route>
 <Route path="/contact" element={<ConatctPage/>}></Route>
 
 </Routes>

 </BrowserRouter>

    </div>
  );
}

export default App;
