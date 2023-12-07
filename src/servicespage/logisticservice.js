import React from "react";
import Logistic from "../images/gateway/Logistic.png";
import sea from "../images/aboutus/seatransport.png";
import warehouse from "../images/aboutus/warehouse.png";
import air from "../images/aboutus/air.png";
import local from "../images/aboutus/shipping.png";
import project from "../images/aboutus/project.png";
import customer from "../images/aboutus/customer.png";

const LogisticService = () => {
  return (
    <div>
      <div className="bg-[#fff] xl:my-0 md:my-20 my-[500px]  w-full">
        <div className="w-full grid gap-16">
          <div className="flex justify-center items-center w-full mt-20 sm:mt-96 md:mt-28 rubikFont">
            <img src={Logistic} alt="Logistic" />
            <span className="bg-[#E8E8E880] px-2 py-1 text-[14px] xl:text-[0.729vw]">
              What We Do
            </span>
          </div>
          <div className="flex justify-center items-center text-[35px] font-bold xl:text-[1.823vw] rubikFont">
            <span>Our Logistics Services</span>
          </div>
          <div className="flex justify-center items-center">
            <div className="grid xl:grid-cols-3 grid-cols-2 gap-8">
              <div className="flex">
                <div className="grid gap-2">
                  <div>
                    <img src={sea} alt="sea" />
                  </div>
                  <div className="text-[25px] xl:text-[1.302vw] rubikFont">
                    Sea Transport Services
                  </div>
                  <div
                    className="grid text-[16px] xl:text-[0.833vw] text-[#666C89] krubFont"
                    style={{ lineHeight: "24.244px" }}
                  >
                    <span>Following the quality of our service </span>
                    <span> thus having gained trust of our</span>
                    <span> many clients.</span>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="grid">
                  <div>
                    <img src={warehouse} alt="sea" />
                  </div>
                  <div className="text-[25px] xl:text-[1.302vw] rubikFont">
                    Warehousing Services
                  </div>
                  <div
                    className="grid text-[16px] xl:text-[0.833vw] text-[#666C89] krubFont"
                    style={{ lineHeight: "24.244px" }}
                  >
                    <span>Following the quality of our service </span>
                    <span> thus having gained trust of our</span>
                    <span> many clients.</span>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="grid">
                  <div>
                    <img src={air} alt="sea" />
                  </div>
                  <div className="text-[25px] xl:text-[1.302vw] rubikFont">
                    Air Fright Services
                  </div>
                  <div
                    className="grid text-[16px] xl:text-[0.833vw] text-[#666C89] krubFont"
                    style={{ lineHeight: "24.244px" }}
                  >
                    <span>Following the quality of our service </span>
                    <span> thus having gained trust of our</span>
                    <span> many clients.</span>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="grid gap-2">
                  <div>
                    <img src={project} alt="sea" />
                  </div>
                  <div className="text-[25px] xl:text-[1.302vw] rubikFont">
                    Project & Exhibition
                  </div>
                  <div
                    className="grid text-[16px] xl:text-[0.833vw] text-[#666C89] krubFont"
                    style={{ lineHeight: "24.244px" }}
                  >
                    <span>Following the quality of our service </span>
                    <span> thus having gained trust of our</span>
                    <span> many clients.</span>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="grid">
                  <div>
                    <img src={local} alt="sea" />
                  </div>
                  <div className="font-[25px] xl:text-[1.302vw] rubikFont">
                    Local Shipping Services
                  </div>
                  <div
                    className="grid text-[16px] xl:text-[0.833vw] text-[#666C89] krubFont"
                    style={{ lineHeight: "24.244px" }}
                  >
                    <span>Following the quality of our service </span>
                    <span> thus having gained trust of our</span>
                    <span> many clients.</span>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="grid">
                  <div>
                    <img src={customer} alt="customer" />
                  </div>
                  <div className="font-[25px] xl:text-[1.302vw] rubikFont">
                    Customer Clearance
                  </div>
                  <div
                    className="grid text-[16px] xl:text-[0.833vw] text-[#666C89] krubFont"
                    style={{ lineHeight: "24.244px" }}
                  >
                    <span>Following the quality of our service </span>
                    <span> thus having gained trust of our</span>
                    <span> many clients.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center mb-20">
            <div className="morework-grad morework-hover flex items-center justify-center">
              <span className="text-[16px] xl:text-[0.833vw] flex font-medium text-white krubFont">
                More Work
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogisticService;
