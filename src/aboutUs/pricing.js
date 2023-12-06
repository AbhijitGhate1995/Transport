import React from "react";
import Logistic from "../images/gateway/Logistic.png";
import "../App.css";

const AboutPricing = () => {
  return (
    <div>
      <div className="bg-white mx-40 xl:my-0 md:my-20 my-[500px]">
        <div className="w-full grid gap-8 mb-20">
          <div className="flex justify-center items-center w-full mt-20 sm:mt-96 md:mt-12 rubikFont">
            <img src={Logistic} alt="Logistic" />
            <span className="bg-[#E8E8E880] px-2 py-1 text-[14px] xl:text-[0.729vw]">
              Pricing
            </span>
          </div>
          <div className="flex justify-center items-center text-[35px] font-bold xl:text-[1.823vw] rubikFont">
            <span>Our Best Pricing</span>
          </div>
          <div className="flex justify-center items-center">
            <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-6">
              <div className="bg-[#F4F4F4] px-4 py-4 grid">
                <div className="flex justify-center items-center text-[30px] font-medium rubikFont text-[#1C1F35]">
                  Basic
                </div>
                <div className="flex justify-center">
                  <span className="text-[85px] xl:text-[4.427vw] rubikFont text-[#1C1F35] font-medium">
                    $39
                  </span>
                  <span className="text-[22px] flex items-center pt-8 xl:text-[1.146vw] rubikFont text-[#1C1F35] font-normal">
                    / month
                  </span>
                </div>
                <div className="flex flex-col justify-center items-center gap-[17px]">
                  <div className="px-4 py-2">Single Truck</div>
                  <div className="px-4 py-2">Full Insurance</div>
                  <div className="px-4 py-2">500 Km</div>
                  <div className="px-4 py-2">Real-time rate shopping</div>
                </div>
                <div className="flex justify-center items-center pb-4 pt-4">
                  <div className="morework-grad morework-hover flex items-center justify-center">
                    <span className="text-[16px] xl:text-[0.833vw] flex font-medium text-white krubFont">
                      Choose Plan
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-[#091242] px-4 py-4 grid text-white">
                <div className="flex justify-center items-center text-[30px] font-medium rubikFont">
                  Standard
                </div>
                <div className="flex justify-center">
                  <span className="text-[85px] xl:text-[4.427vw] rubikFont font-medium">
                    $59
                  </span>
                  <span className="text-[22px] flex items-center pt-8 xl:text-[1.146vw] rubikFont font-normal">
                    / month
                  </span>
                </div>
                <div className="flex flex-col justify-center items-center gap-[17px]">
                  <div className="px-4 py-2">Single Truck</div>
                  <div className="px-4 py-2">Full Insurance</div>
                  <div className="px-4 py-2">500 Km</div>
                  <div className="px-4 py-2">Real-time rate shopping</div>
                </div>
                <div className="flex justify-center items-center pb-4 pt-4">
                  <div className="explore-grad choose-hover krubFont flex items-center justify-center">
                    <span className="text-[16px] xl:text-[0.833vw] flex font-semibold cursor-pointer">
                      Choose Plan
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-[#F4F4F4] px-4 py-4 grid">
                <div className="flex justify-center items-center text-[30px] font-medium rubikFont text-[#1C1F35]">
                  Premium
                </div>
                <div className="flex justify-center">
                  <span className="text-[85px] xl:text-[4.427vw] rubikFont text-[#1C1F35] font-medium">
                    $89
                  </span>
                  <span className="text-[22px] flex items-center pt-8 xl:text-[1.146vw] rubikFont text-[#1C1F35] font-normal">
                    / month
                  </span>
                </div>
                <div className="flex flex-col justify-center items-center gap-[17px]">
                  <div className="px-4 py-2">Single Truck</div>
                  <div className="px-4 py-2">Full Insurance</div>
                  <div className="px-4 py-2">500 Km</div>
                  <div className="px-4 py-2">Real-time rate shopping</div>
                </div>
                <div className="flex justify-center items-center pb-4 pt-4">
                  <div className="morework-grad morework-hover flex items-center justify-center">
                    <span className="text-[16px] xl:text-[0.833vw] flex font-medium text-white krubFont">
                      Choose Plan
                    </span>
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

export default AboutPricing;
