import React from "react";
import { Link } from "react-router-dom";

const PageContent = () => {
  return (
    <div>
      <div className="bg-white mx-60 xl:my-0 md:my-20 my-[500px]">
        <div className="w-full grid bg-[#fff] mt-[100px] pb-20 mb-20">
          <div className="flex flex-col justify-center items-center text-[35px] font-bold xl:text-[1.823vw] pt-20 gap-8">
            <div className="gap-4 flex flex-wrap text-[#1C1F35] rubikFont text-[350px] xl:text-[18.229vw]">
              4<span className="text-[#FFB82B]">0</span>4
            </div>
            <div className="xl:flex flex-wrap flex-col justify-center items-center gap-2 krubFont">
              <span className="text-[35px] xl:text-[1.823vw] text-[#1C1F35]">Oops! Page not found.</span>
              <span className="text-[16px] xl:text-[0.833vw] text-[#666C89]">Let’s get you to where you need to be.</span>
            </div>
            <div className="backtohome-grad send-hover flex justify-center items-center krubFont cursor-pointer">
              <Link to="/">
                <div className="">
                  <span className="text-[16px] xl:text-[0.833vw] flex justify-center items-center ml-2 text-[#23212A] font-semibold">
                    Back To Home
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageContent;
