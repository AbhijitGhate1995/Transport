import React from "react";
import person from "../images/aboutus/person.png";
import Logistic from "../images/gateway/Logistic.png";
import call from "../images/header/call.png";
import "../App.css";

const AboutFaq = () => {
  return (
    <div className="bg-[#F4F4F4] mt-4 pb-20">
      <div className="w-full flex flex-wrap justify-evenly items-center">
        <div className="gap-4 flex flex-col mt-16">
          <div className="flex justify-start items-center rubikFont">
            <img src={Logistic} alt="Logistic" />
            <span className="bg-[#E8E8E880] px-2 py-1 text-[14px] xl:text-[0.729vw]">
              FAQ
            </span>
          </div>
          <div
            className="grid text-[35px] font-bold xl:text-[1.823vw] rubikFont"
            style={{ lineHeight: "normal" }}
          >
            <span>Frequently Asked Questions</span>
          </div>
          <div className="text-[20px] xl:text-[1.042vw] flex justify-between font-normal rubikFont about-icon">
            How can I pay for your logistics services?{" "}
            <i className="pi pi-angle-down"></i>
          </div>
          <div
            className="grid text-[16px] xl:text-[0.833vw] font-normal krubFont"
            style={{ lineHeight: "24.244px" }}
          >
            <span>
              Leverage agile frameworks to provide a robust synopsis for
              strategy
            </span>
            <span>
              foster collaborative thinking to further the overall value
              proposition.
            </span>
          </div>
          <div className="grid gap-2 krubFont">
            <div className=" py-2 flex justify-between text-[#1C1F35]">
              What payment methods are supported?{" "}
              <i className="pi pi-angle-right"></i>
            </div>
          </div>
          <div className="grid gap-2 krubFont">
            <div className=" py-2 flex justify-between text-[#1C1F35]">
              Can i specify a delivery date when ordering?{" "}
              <i className="pi pi-angle-right"></i>
            </div>
          </div>
          <div className="grid gap-2 krubFont">
            <div className=" py-2 flex justify-between text-[#1C1F35]">
              What options for logistics plans are available?{" "}
              <i className="pi pi-angle-right"></i>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <div className="absolute bg-[#111C55] px-8 py-6 grid 2xl:top-[4600px] 2xl:left-[900px]
           gap-4 z-10 xl:top-[4050px] xl:left-[550px] lg:top-[6320px] md:top-[6820px] sm:top-[9999px]">
            <div className="flex text-white rubikFont text-[14px] xl:text-[0.729vw]">
              <img src={Logistic} alt="Logistic" />
              <span className="bg-[#041C3780] px-2 py-1">Pricing</span>
            </div>
            <div className="text-[20px] xl:text-[1.042vw] grid rubikFont font-medium text-white">
              <span>You need any help? get free</span>
              <span>consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <img src={call} alt="Time" />
              </div>
              <div
                className="text-[14px] xl:text-[0.729vw] font-semibold text-white grid"
                style={{ lineHeight: "18.903px" }}
              >
                <span>Call Us</span>
                <span>(00) 112 365 489</span>
              </div>
            </div>
            <div className="explore-grad choose-hover krubFont flex items-center justify-center">
              <span className="text-[16px] xl:text-[0.833vw] flex font-semibold cursor-pointer">
                Contact Us
              </span>
            </div>
          </div>
          <img
            src={person}
            alt="person"
            style={{ width: "500px" }}
            className="relative"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutFaq;
