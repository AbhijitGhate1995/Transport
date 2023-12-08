import React from "react";
import Logistic from "../images/gateway/Logistic.png";
import Container from "../images/ourteam/container.png";
import Vision from "../images/ourteam/vision.png";
import Estimate from "../images/ourteam/estimate.png";
import truck from "../images/ourteam/truck.png";

const AboutTranporter = () => {
  return (
    <div>
      <div className="mb-20">
        <div className="w-full flex flex-wrap justify-evenly items-center">
          <div className="mt-16">
            <img src={Container} alt="Container" style={{ width: "500px" }} className="relative" />
            <img src={truck} alt="truck"  style={{ width: "220px" }}  className="absolute xl:top-[2000px] xl:left-[500px] 2xl:top-[2400px] 2xl:left-[600px] md:top-[2400px] md:left-[500px] sm:top-[3200px] sm:left-[400px] border-l-8 border-t-8 border-white"/>
          </div>
          <div className="gap-4 flex flex-col mt-16">
            <div className="flex justify-start items-center rubikFont">
              <img src={Logistic} alt="Logistic" />
              <span className="bg-[#E8E8E880] px-2 py-1 text-[14px] xl:text-[0.729vw]">
                About
              </span>
            </div>
            <div
              className="grid text-[35px] font-bold xl:text-[1.823vw] rubikFont"
              style={{ lineHeight: "normal" }}
            >
              <span>Why Choose Us</span>
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
            <div className="grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-6 krubFont">
              <div className="flex">
                <div className="grid gap-2">
                  <div>
                    <img src={Vision} alt="Vision" />
                  </div>
                  <div className="text-[25px] xl:text-[1.302vw] rubikFont">
                  Our Vision
                  </div>
                  <div
                    className="grid text-[16px] xl:text-[0.833vw] text-[#666C89] krubFont"
                    style={{ lineHeight: "24.244px" }}
                  >
                    <span>Leverage agile frameworks to </span>
                    <span> provide a robust synopsis for </span>
                    <span>strategy foster</span>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="grid gap-2">
                  <div>
                    <img src={Estimate} alt="Estimate" />
                  </div>
                  <div className="text-[25px] xl:text-[1.302vw] rubikFont">
                  Estimate Shipping
                  </div>
                  <div
                    className="grid text-[16px] xl:text-[0.833vw] text-[#666C89] krubFont font-medium"
                    style={{ lineHeight: "24.244px" }}
                  >
                     <span>Leverage agile frameworks to </span>
                    <span> provide a robust synopsis for </span>
                    <span>strategy foster</span>
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

export default AboutTranporter;
