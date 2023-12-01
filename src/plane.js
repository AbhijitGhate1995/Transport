import React from "react";
import plane from "./images/plane/plane.png";
import Logistic from "./images/gateway/Logistic.png";
import Package from "./images/plane/package.png";
import Ship from "./images/plane/ship.png";
import Global from "./images/plane/global.png";
import TechSupport from "./images/plane/techsupport.png";
import Time from "./images/plane/time.png";
import Price from "./images/plane/price.png";
import "./App.css";


const PlaneData = () => {
  return (
    <div>
      <div className="w-full 2xl:h-[770px] h-[700px] grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2">
        <div className="w-full bg-[#091242] relative">
          <div className="mt-24 xl:ml-20">
            <div className="">
            <img src={plane} alt="plane" className="absolute z-[2]" />
            </div>
          </div>
        </div>
        <div className="w-full bg-[#F4F4F4] relative xl:mt-0 lg:mt-0 md:mt-0 sm:mt-[400px] mt-[320px]">
          <div className="grid mt-24 pl-24">
            <div className="flex justify-start items-center rubikFont">
              <img src={Logistic} alt="Logistic" />
              <span className="bg-[#E8E8E880] px-2 py-1 text-[14px] xl:text-[0.729vw]">
                Why Choose
              </span>
            </div>
            <div className="grid text-[35px] font-bold xl:text-[1.823vw] rubikFont" style={{lineHeight: "normal" }}>
              <span>We create opportunity to</span>
              <span>reach potential</span>
            </div>
            <div className="grid text-[16px] xl:text-[0.833vw] font-normal krubFont" style={{lineHeight: "24.244px" }}>
              <span>
                Leverage agile frameworks to provide a robust synopsis for
              </span>
              <span>
                strategy foster collaborative thinking to further the overall
              </span>
              <span>value proposition.</span>
            </div>
            <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 mt-4 gap-2 rubikFont">
              <div className="flex justify-start items-center gap-4">
                <img src={Package} alt="Package" />
                <div className="text-[20px] xl:text-[1.042vw]">
                  Safe Package
                </div>
              </div>
              <div className="flex justify-start items-center gap-4">
                <img src={Ship} alt="Ship" />
                <div className="text-[20px] xl:text-[1.042vw]">
                  Ship Everyware
                </div>
              </div>
              <div className="flex justify-start items-center gap-4">
                <img src={Global} alt="Global" />
                <div className="text-[20px] xl:text-[1.042vw]">
                  Global Tracking
                </div>
              </div>
              <div className="flex justify-start items-center gap-4">
                <img src={TechSupport} alt="TechSupport" />
                <div className="text-[20px] xl:text-[1.042vw]">
                  24/7 Support
                </div>
              </div>
              <div className="flex justify-start items-center gap-4">
                <img src={Time} alt="Time" />
                <div className="text-[20px] xl:text-[1.042vw]">
                  In Time Delivery
                </div>
              </div>
              <div className="flex justify-start items-center gap-4">
                <img src={Price} alt="Price" />
                <div className="text-[20px] xl:text-[1.042vw]">
                  Transparant Pricing
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaneData;
