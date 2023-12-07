import React from "react";
import FooterImg from "../images/servicesingle/footerimg.png";
import truck from "../images/servicesingle/truck.png";

const BenefitService = () => {
  return (
    <div>
      <div className="bg-[#fff] mt-4 pb-20">
        <div className="w-full flex flex-wrap justify-evenly items-center">
          <div className="gap-4 flex flex-col mt-16">
            <div
              className="grid text-[35px] font-bold xl:text-[1.823vw] rubikFont"
              style={{ lineHeight: "normal" }}
            >
              <span>Benefit of Service</span>
            </div>
            <div
              className="grid text-[16px] xl:text-[0.833vw] font-normal krubFont"
              style={{ lineHeight: "24.244px" }}
            >
              <span>
                Sed ut perspiciatis, unde omnis iste natu volupta temaccu
              </span>
              <span>santium doloremque laudantium, totam rem quae ab illo</span>
              <span>inventore veritatis.</span>
            </div>
            <div className="grid text-[#1C1F35] xl:text-[1.042vw] text-[20px] gap-4">
              <div className="flex items-center gap-2">
                <i className="pi pi-arrow-right"></i>
                <div>Clearance and compliance service</div>
              </div>
              <div className="flex items-center gap-2">
                <i className="pi pi-arrow-right"></i>
                <div>Saving Time to Deal with commodo iaculis</div>
              </div>
              <div className="flex items-center gap-2">
                <i className="pi pi-arrow-right"></i>
                <div>Automate your business elis tristique</div>
              </div>
              <div className="flex items-center gap-2">
                <i className="pi pi-arrow-right"></i>
                <div>Saving Time to Deal with commodo iaculis</div>
              </div>
            </div>
          </div>
          <div className="mt-16">
            <img src={truck} alt="truck" style={{ width: "500px" }} />
          </div>
        </div>
      </div>
      <div className="bg-[#fff] mt-4 pb-20">
        <div className="w-full flex flex-wrap justify-evenly items-center">
          <div className="mt-16">
            <img src={FooterImg} alt="FooterImg" style={{ width: "500px" }} />
          </div>
          <div className="gap-4 flex flex-col mt-16">
            <div
              className="grid text-[35px] font-bold xl:text-[1.823vw] rubikFont"
              style={{ lineHeight: "normal" }}
            >
              <span>How It Works</span>
            </div>
            <div
              className="grid text-[16px] xl:text-[0.833vw] font-normal krubFont"
              style={{ lineHeight: "24.244px" }}
            >
              <span>
                Sed ut perspiciatis, unde omnis iste natu volupta temaccu
              </span>
              <span>accusantium doloremque laudantium, totam rem aperiam eaque</span>
              <span>ipsa, quae ab illo inventore veritatis et quasi architecto beatae </span>
              <span>vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia</span>
              <span> voluptas sit, doloremque laudantium.</span>
            </div>
            <div
              className="grid text-[16px] xl:text-[0.833vw] font-normal krubFont"
              style={{ lineHeight: "24.244px" }}
            >
              <span>
                Sed ut perspiciatis, unde omnis iste natu volupta temaccu
              </span>
              <span>santium doloremque laudantium, totam rem quae ab illo</span>
              <span>inventore veritatis.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitService;
