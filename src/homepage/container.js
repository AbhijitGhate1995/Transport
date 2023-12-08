import React from "react";
import Logistic from "../images/gateway/Logistic.png";
import delivery from "../images/container/delivery.png";
import travelcost from "../images/container/travelcost.png";
import deliverytime from "../images/container/deliverytime.png"
import "../App.css";


const ContainerData = () => {
  return (
    <div>
    <div className="wrapper">
      <div className="container-bg">
        <div className="container-wrapper">
          <div className="flex justify-start items-center">
            <div className="xl:ml-72 xl:mt-96 ml-40 mt-28 bg-white text-black px-16 py-10 min-w-fit max-w-max  xl:flex flex-wrap">
              <div className="grid xl:grid-cols-2 grid-cols-1 text-[14px] xl:text-[0.729vw]">
                <div>
                  <div className="flex rubikFont">
                    <img src={Logistic} alt="Logistic" />
                    <span className="bg-[#E8E8E880] px-2 py-1">Why Us</span>
                  </div>
                  <div className="grid text-[35px] font-bold xl:text-[1.823vw] pt-1 rubikFont" style={{lineHeight:"normal"}}>
                    <span>We provide full range global</span>
                    <span> logistics solution</span>
                  </div>
                  <div className="grid text-[16px] xl:text-[0.833vw] font-normal krubFont">
                    <span>
                      Leverage agile frameworks to provide a robust synopsis for
                    </span>
                    <span>
                      strategy foster collaborative thinking to further the
                      overall
                    </span>
                    <span>value proposition.</span>
                  </div>
                  <div className="grid text-[16px] xl:text-[0.833vw] font-normal mt-2 krubFont">
                    <span>
                      Organically grow the holistic world view of disruptive
                    </span>
                    <span>
                      innovation via workplace diversity and empowerment.
                    </span>
                  </div>
                  <div className="mt-6 krubFont">
                    <div className="text-[25px] xl:text-[1.302vw] grid mt-4 gap-[22px]">
                      <div className="flex items-center gap-2">
                        <img src={delivery} alt="delivery" />
                        <span>Delivery on Time</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <img src={travelcost} alt="Travel cost" />
                        <span>Optimized Travel Cost</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wrapper xl:ml-20 mt-4 flex justify-center items-start">
                  <div className="plane-img relative">
                    <img src={deliverytime} alt="deliverytime" className="absolute xl:top-[200px] xl:right-[80px]
                     2xl:top-[250px] 2xl:right-[160px] lg:top-[120px] lg:right-[300px] md:top-[120px] md:right-[300px]
                     sm:top-[80px] sm:right-[250px]"/>

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

export default ContainerData;
