import React from "react";
import truck from "../images/aboutus/truck.png";
import Logistic from "../images/gateway/Logistic.png";
import DeliveryBoy from "../images/aboutus/deliveryboy.png"
import "../App.css";

const CompanyOverview = () => {
  return (
    <div className="mb-20">
      <div className="w-full flex flex-wrap justify-evenly items-center">
        <div className="mt-16 mb-20">
          <img src={truck} alt="track" style={{ width: "500px" }} className="relative"/>
          <img src={DeliveryBoy} alt="DeliveryBoy" className="absolute 2xl:bottom-[-420px] 2xl:left-[600px] xl:bottom-[-450px] xl:left-[430px] lg:bottom-[-500px] lg:left-[600px] sm:bottom-[-450px] sm:left-[400px]"/>
        </div>
        <div className="gap-4 flex flex-col mt-16">
          <div className="flex justify-start items-center rubikFont">
            <img src={Logistic} alt="Logistic" />
            <span className="bg-[#E8E8E880] px-2 py-1 text-[14px] xl:text-[0.729vw]">
              About Us
            </span>
          </div>
          <div
            className="grid text-[35px] font-bold xl:text-[1.823vw] rubikFont"
            style={{ lineHeight: "normal" }}
          >
            <span>Our Company Overview</span>
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
          <div className="grid grid-cols-3 gap-2 krubFont text-[19px] xl:text-[0.990vw]">
            <div className="px-4 py-2 flex justify-center bg-[#FFB82B] text-white">
              Our Approach
            </div>
            <div className="px-4 py-2 flex justify-center bg-[#F4F4F4]">Our Approach</div>
            <div className="px-4 py-2 flex justify-center bg-[#F4F4F4]">Our Approach</div>
          </div>
          <div
            className="krubFont text-[16px] xl:text-[0.833vw] font-medium grid"
            style={{ lineHeight: "24.244px" }}
          >
            <span>
              Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
              accusantium
            </span>
            <span>
              doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo
              inventore
            </span>
            <span>
              veritatis et quasi architecto beatae vitae dicta sunt, explicabo.
            </span>
            <span>Nemo enim ipsam voluptatem quia voluptassit.</span>
          </div>
          <div className="">
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

export default CompanyOverview;
