import React from "react";
import HeaderData from "../component/header";
import FooterData from "../component/footer";
import AllAssets from "./allassets";
import IconGraphics from "./icongraphics";

const LicensesPage = () => {
  return (
    <div>
      <HeaderData />
      <AllAssets/>
      <IconGraphics/>
      <FooterData />
    </div>
  );
};

export default LicensesPage;
