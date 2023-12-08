import React from "react";
import person from "../images/servicepage/goodness.png";
import Logistic from "../images/gateway/Logistic.png";
import warehouse from "../images/servicepage/warehouseicon.png";
import shield from "../images/servicepage/shieldicon.png";
import tree from "../images/servicepage/treeicon.png";
import building from "../images/servicepage/building.png";
import "../App.css";

const GoodnessData = () => {
  return (
    <div>
      <div className="bg-[#F4F4F4] mt-4 pb-20 w-full">
        <div className="w-full flex flex-col gap-2 justify-center pt-12 items-center rubikFont">
          <div className="flex justify-center">
            <img src={Logistic} alt="Logistic" />
            <span className="bg-[#E8E8E880] px-2 py-1 text-[14px] xl:text-[0.729vw]">
              Our Goodness
            </span>
          </div>

          <div
            className="grid text-[35px] font-bold xl:text-[1.823vw] rubikFont"
            style={{ lineHeight: "normal" }}
          >
            <span>How We Works</span>
          </div>
        </div>
        <div className="w-full flex flex-wrap justify-evenly items-center">
          <div className="mt-16">
            <img src={person} alt="person" style={{ width: "500px" }}  className="relative"/>
            <img src={building} alt="building" style={{ width: "250px" }} className="absolute xl:bottom-[-1400px] xl:left-[500px]
             2xl:bottom-[-1400px] 2xl:left-[600px] lg:bottom-[-1870px] lg:left-[260px] md:bottom-[-1850px] md:left-[400px] sm:bottom-[-2920px] sm:left-[350px]"/>
          </div>
          <div className="gap-4 flex flex-col mt-16">
            <div className="flex gap-4">
              <div>
                <img src={warehouse} alt="warehouse" />
              </div>
              <div className="grid">
                <div className="text-[25px] xl:text-[1.302vw] rubikFont">
                  Warehousing Services
                </div>
                <div
                  className="grid text-[16px] xl:text-[0.833vw] text-[#666C89] krubFont"
                  style={{ lineHeight: "24.244px" }}
                >
                  <span>
                    Leverage agile frameworks to provide a robust synopsis for{" "}
                  </span>
                  <span> strategy foster collaborative thinking</span>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <div>
                <img src={shield} alt="shield" />
              </div>
              <div className="grid">
                <div className="text-[25px] xl:text-[1.302vw] rubikFont">
                Safety & Quality
                </div>
                <div
                  className="grid text-[16px] xl:text-[0.833vw] text-[#666C89] krubFont"
                  style={{ lineHeight: "24.244px" }}
                >
                  <span>
                    Leverage agile frameworks to provide a robust synopsis for{" "}
                  </span>
                  <span> strategy foster collaborative thinking</span>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <div>
                <img src={tree} alt="warehouse" />
              </div>
              <div className="grid">
                <div className="text-[25px] xl:text-[1.302vw] rubikFont">
                Care for Environment
                </div>
                <div
                  className="grid text-[16px] xl:text-[0.833vw] text-[#666C89] krubFont"
                  style={{ lineHeight: "24.244px" }}
                >
                  <span>
                    Leverage agile frameworks to provide a robust synopsis for{" "}
                  </span>
                  <span> strategy foster collaborative thinking</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoodnessData;
