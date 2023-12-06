import React from "react";
import { InputText } from "primereact/inputtext";

const PasswordData = () => {
  return (
    <div>
      <div className="bg-white mx-40 xl:my-0 md:my-20 my-[500px]">
        <div className="w-full grid bg-[#091242] text-white mt-[100px] pb-20 mb-20">
          <div className="flex justify-center items-center text-[35px] font-bold xl:text-[1.823vw] rubikFont pt-20">
            <span>Enter Password</span>
          </div>
          <div className="flex justify-center items-center">
            <div className="flex mt-8">
              <div className="xl:flex flex-wrap justify-center items-center gap-6 inputclass">
                <InputText
                  type="text"
                  className="px-2 mt-5 h-12 flex justify-center items-end"
                  placeholder="Enter Your Password"
                />
                <div className="flex">
                  <div className="explore-grad choose-hover mt-6 krubFont">
                    <span className="text-[16px] xl:text-[0.833vw] flex ml-8 mt-4 font-semibold cursor-pointer">
                      Submit Message
                    </span>
                  </div>
                </div>
              </div>
              <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 inputclass"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordData;
