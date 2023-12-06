import React from 'react';
import BlogData from "./blog";
import ContainerData from "./container";
import DeliveryData from "./delivery";
import PlaneData from "./plane";
import SafeCargoData from "./safecargo";
import TestimonialData from "./testimonial";
import TransporterData from "./transporter";
import TransportingData from "./transporting";
import ContactData from "./contact";
import FooterData from "../component/footer"
import GateWayData from './gateway';
import HeaderData from "../component/header"
import FooterImg from './footerimg';


const HomePage = () => {
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
      <FooterImg/>
      <FooterData/>
    </div>
  )
}

export default HomePage