import "./App.css";
import BlogData from "./blog";
import ContactData from "./contact";
import ContainerData from "./container";
import DeliveryData from "./delivery";
import FooterData from "./footer";
import GateWayData from "./gateway";
import HeaderData from "./header";
import PlaneData from "./plane";
import SafeCargoData from "./safecargo";
import TestimonialData from "./testimonial";
import TransporterData from "./transporter";
import TransportingData from "./transporting";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

function App() {
  return (
    <div>
      <HeaderData />
      <GateWayData />
      <SafeCargoData />
      <ContainerData />
      <DeliveryData />    
      <TransportingData/>
      <TestimonialData/>
      <PlaneData/>
      <TransporterData/>
      <ContactData/>
      <BlogData/>
      <FooterData/>
    </div>
  );
}

export default App;
