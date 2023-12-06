import React from "react";
import Container from "../images/contact/container.jpg";
import Norto from "../images/aboutus/Norto.png";
import Mountain from "../images/contact/mountain.jpg";
import pointone from "../images/aboutus/pointoneIcon.png"

const AboutImages = () => {
  return (
    <div className="mb-16">
      <div className="w-full flex justify-center items-center">
        <div className="grid xl:grid-cols-4 grid-cols-2 mt-16 px-20">
          <img src={Container} alt="Container" />
          <div className="bg-[#FFF] flex justify-center items-center">
            <img src={Norto} alt="Norto" />
          </div>
          <div className="flex justify-center items-center text-[20px] xl:text-[1.042vw] font-medium relative">
            <img src={pointone} alt="pointone"/>
            <div className="flex flex-col justify-start absolute text-center font-medium text-[20px] xl:text-[1.042vw] pl-4 newRomanFont" style={{letterSpacing: "11.3px"}}>
                <span>Points</span>
                <span>One</span>
            </div>
          </div>
          {/* <img src={Mountain} alt="Mountain" /> */}
          <div className="flex flex-col justify-center items-center text-[#091242] text-[20px] xl:text-[1.042vw] font-medium thabitFont">
            <span>OUT OF THE</span>
            <span>SAND BOX</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutImages;
