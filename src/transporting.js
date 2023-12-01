import React from "react";
import "./App.css";


const TransportingData = () => {
  return (
    <div className="relative">
      <div className="w-full text-[35px] xl:text-[1.823vw] font-semibold flex justify-center items-center mb-10 rubikFont">
        Transporting Across The World
      </div>
      <div className="flex justify-center items-center">
        <div className="grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 z-10 gap-8">
          <div className="tanker-bg flex flex-col justify-end">
            <span className="text-[20px] xl:text-[1.042vw] text-white ml-6 rubikFont">
              Liquid Transportation
            </span>
            <span className="text-[16px] xl:text-[0.833vw] text-[#FFB629] ml-6 mb-2 krubFont">
              Premium Tankers
            </span>
          </div>
          <div className="packaging-bg flex flex-col justify-end">
            <span className="text-[20px] xl:text-[1.042vw] text-white ml-6 rubikFont">
              Liquid Transportation
            </span>
            <span className="text-[16px] xl:text-[0.833vw] text-[#FFB629] ml-6 mb-2 krubFont" >
              Premium Tankers
            </span>
          </div>
          <div className="truck-bg flex flex-col justify-end">
            <span className="text-[20px] xl:text-[1.042vw] text-white ml-6 rubikFont">
              Liquid Transportation
            </span>
            <span className="text-[16px] xl:text-[0.833vw] text-[#FFB629] ml-6 mb-2 krubFont">
              Premium Tankers
            </span>
          </div>
          <div className="warehouse-bg flex flex-col justify-end">
            <span className="text-[20px] xl:text-[1.042vw] text-white ml-6 rubikFont">
              Liquid Transportation
            </span>
            <span className="text-[16px] xl:text-[0.833vw] text-[#FFB629] ml-6 mb-2 krubFont">
              Premium Tankers 
            </span>
          </div>
          <div className="boat-bg flex flex-col justify-end">
            <span className="text-[20px] xl:text-[1.042vw] text-white ml-6 rubikFont">
              Liquid Transportation
            </span>
            <span className="text-[16px] xl:text-[0.833vw] text-[#FFB629] ml-6 mb-2 krubFont">
              Premium Tankers
            </span>
          </div>
        </div>
      </div>
      <div className="w-full transporting-grad flex justify-center items-center top-[-100px] cursor-pointer">
        <div className="morework-grad morework-hover flex items-center justify-center">
          <span className="text-[16px] xl:text-[0.833vw] flex font-medium text-white krubFont">
            More Work
          </span>
        </div>
      </div>
    </div>
  );
};

export default TransportingData;
