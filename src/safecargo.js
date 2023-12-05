import React from "react";
import Logistic from "./images/gateway/Logistic.png";
import sea from "./images/safecargo/sea.png";
import local from "./images/safecargo/local.png";
import air from "./images/safecargo/air.png";
import warehouse from "./images/safecargo/warehouse.png";
import "./App.css";

const SafeCargoData = () => {
  return (
    <div className="m-10">
      <div className="xl:flex flex-wrap">
        <div className="xl:ml-52 xl:mt-12 ml-40 mt-20">
          <div className="flex rubikFont">
            <img src={Logistic} alt="what we do" />
            <span className="bg-[#E8E8E880] px-2 py-1 xl:text-[0.729vw] text-[14px]">
              What We Do
            </span>
          </div>
          <div
            className="text-[35px] xl:text-[1.823vw] grid font-bold mt-2 rubikFont"
            style={{ lineHeight: "normal" }}
          >
            <span>Safe & Reliable</span>
            <span>Cargo Solutions</span>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 xl:ml-12 xl:mt-12 ml-20 mt-12 gap-8">
          <div className="flex gap-4">
            <div>
              <img src={sea} alt="sea" />
            </div>
            <div className="grid pl-4">
              <div
                className="text-[25px] xl:text-[1.302vw] rubikFont"
              >
                Sea Transport Services
              </div>
              <div
                className="grid text-[16px] xl:text-[0.833vw] text-[#666C89] krubFont"
                style={{lineHeight: "24.244px" }}
              >
                <span>Following the quality of our service </span>
                <span> thus having gained trust of our</span>
                <span> many clients.</span>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div>
              <img src={warehouse} alt="sea" />
            </div>
            <div className="grid pl-4">
              <div
                className="text-[25px] xl:text-[1.302vw] rubikFont"
              >
                Warehousing Services
              </div>
              <div
                className="grid text-[16px] xl:text-[0.833vw] text-[#666C89] krubFont"
                style={{lineHeight: "24.244px" }}
              >
                <span>Following the quality of our service </span>
                <span> thus having gained trust of our</span>
                <span> many clients.</span>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div>
              <img src={air} alt="sea" />
            </div>
            <div className="grid pl-4">
              <div
                className="text-[25px] xl:text-[1.302vw] rubikFont"
              >
                Air Fright Services
              </div>
              <div
                className="grid text-[16px] xl:text-[0.833vw] text-[#666C89] krubFont"
                style={{lineHeight: "24.244px" }}
              >
                <span>Following the quality of our service </span>
                <span> thus having gained trust of our</span>
                <span> many clients.</span>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div>
              <img src={local} alt="sea" />
            </div>
            <div className="grid pl-4">
              <div
                className="font-[25px] xl:text-[1.302vw] rubikFont"
                
              >
                Local Shipping Services
              </div>
              <div
                className="grid text-[16px] xl:text-[0.833vw] text-[#666C89] krubFont"
                style={{lineHeight: "24.244px" }}
              >
                <span>Following the quality of our service </span>
                <span> thus having gained trust of our</span>
                <span> many clients.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SafeCargoData;
