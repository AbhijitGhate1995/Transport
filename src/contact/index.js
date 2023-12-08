import React from "react";
import HeaderData from "../component/header";
import FooterData from "../component/footer";
import ContactTruck from "./contacttruck";
import AboutImages from "../aboutUs/images";
import MoreContact from "./moreContact";
import AboutusContact from "./aboutuscontact";

const ConatctPage = () => {
  return (
    <div>
      <HeaderData />
      <ContactTruck/>
      <MoreContact/>
      <AboutImages/>
      <AboutusContact/>
      <FooterData />
    </div>
  );
};

export default ConatctPage;
