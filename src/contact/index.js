import React from "react";
import HeaderData from "../component/header";
import FooterData from "../component/footer";
import AboutFaq from "../aboutUs/faq";
import ContactTruck from "./contacttruck";
import AboutImages from "../aboutUs/images";
import MoreContact from "./moreContact";

const ConatctPage = () => {
  return (
    <div>
      <HeaderData />
      <ContactTruck/>
      <MoreContact/>
      <AboutImages/>
      <AboutFaq/>
      <FooterData />
    </div>
  );
};

export default ConatctPage;
