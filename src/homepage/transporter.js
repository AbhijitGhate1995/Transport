import React from "react";
import Logistic from "../images/gateway/Logistic.png";
import Jessca from "../images/transporter/jessca.png";
import Twitter from "../images/transporter/twitter.png";
import Facebook from "../images/transporter/facebook.png";
import Instagram from "../images/transporter/instagram.png";
import Linkedin from "../images/transporter/linkedin.png";
import Kathleen from "../images/transporter/kathleen.png";
import Rebecca from "../images/transporter/rebecca.png";
import "../App.css";


const TransporterData = () => {
  return (
    <div>
      <div className="bg-white mx-40 xl:my-0 md:my-20 my-[500px] sm:my-20">
        <div className="w-full grid gap-8">
          <div className="flex justify-center items-center w-full mt-20 sm:mt-[900px] md:mt-40 rubikFont">
            <img src={Logistic} alt="Logistic" />
            <span className="bg-[#E8E8E880] px-2 py-1 text-[14px] xl:text-[0.729vw]">
              The Transporters
            </span>
          </div>
          <div className="flex justify-center items-center text-[35px] font-bold xl:text-[1.823vw] rubikFont">
            <span>Meet Expert Team</span>
          </div>
          <div className="flex justify-center items-center">
            <div className="grid xl:grid-cols-3 grid-cols-2 gap-6">
              <div className="grid">
                <img src={Jessca} alt="Jessca" />
                <div className="">
                  <div className="bg-[#1C1F35] h-20 relative">
                    <div className="flex justify-end items-center">
                      <div className="socialmedia-grad gap-4 flex justify-center items-center">
                        <img src={Twitter} alt="Twitter" />
                        <img src={Facebook} alt="Facebook" />
                        <img src={Instagram} alt="Instagram" />
                      </div>
                    </div>
                    <div className="flex flex-col justify-start items-start px-6 py-6 text-white">
                      <span className="text-[20px] xl:text-[1.042vw] rubikFont" style={{lineHeight: "normal" }}>
                        Jessca Arow
                      </span>
                      <span className="text-[16px] xl:text-[0.833vw] krubFont" style={{lineHeight:"24.244px" }}>
                        Designer
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid">
                <img src={Kathleen} alt="Kathleen" />
                <div className="">
                  <div className="bg-[#1C1F35] h-20 relative">
                    <div className="flex justify-end items-center">
                      <div className="socialmedia-grad gap-4 flex justify-center items-center">
                        <img src={Linkedin} alt="Linkedin" />
                        <img src={Twitter} alt="Twitter" />
                        <img src={Facebook} alt="Facebook" />
                        <img src={Instagram} alt="Instagram" />
                      </div>
                    </div>
                    <div className="flex flex-col justify-start items-start px-6 py-6 text-white">
                      <span className="text-[20px] xl:text-[1.042vw] rubikFont" style={{lineHeight: "normal" }}>
                        Kathleen Smith
                      </span>
                      <span className="text-[16px] xl:text-[0.833vw] krubFont" style={{lineHeight:"24.244px" }}>
                        Designer
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid">
                <img src={Rebecca} alt="Rebecca" />
                <div className="">
                  <div className="bg-[#1C1F35] h-20 relative">
                    <div className="flex justify-end items-center">
                      <div className="socialrebeca-grad gap-4 flex justify-center items-center">
                        <img src={Facebook} alt="Facebook" />
                        <img src={Instagram} alt="Instagram" />
                      </div>
                    </div>
                    <div className="flex flex-col justify-start items-start px-6 py-6 text-white">
                      <span className="text-[20px] xl:text-[1.042vw] rubikFont" style={{lineHeight: "normal" }}>
                        Rebecca Tylor
                      </span>
                      <span className="text-[16px] xl:text-[0.833vw] krubFont" style={{lineHeight:"24.244px" }}>
                        Designer
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransporterData;
