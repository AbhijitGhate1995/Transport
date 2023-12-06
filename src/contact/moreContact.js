import React, { useState } from "react";
import Logistic from "../images/gateway/Logistic.png";
import time from "../images/header/time.png";
import call from "../images/header/call.png";
import email from "../images/header/email.png";
import { InputTextarea } from "primereact/inputtextarea";
import { InputText } from "primereact/inputtext";

const MoreContact = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <div className="bg-white mx-40 xl:my-0 md:my-20 my-[500px]">
        <div className="w-full grid gap-8 bg-[#091242] text-white mt-[50px] pb-20">
          <div className="flex justify-center items-center w-full mt-20 sm:mt-96 md:mt-20 rubikFont">
            <img src={Logistic} alt="Logistic" />
            <span className="bg-[#E8E8E880] px-2 py-1 text-[14px] xl:text-[0.729vw]">
              Contact
            </span>
          </div>
          <div className="flex justify-center items-center text-[35px] font-bold xl:text-[1.823vw] rubikFont">
            <span>Get in touch with us</span>
          </div>
          <div className="krubFont flex justify-center items-center flex-col">
            <span>
              Leverage agile frameworks to provide a robust synopsis for
              strategy foster{" "}
            </span>
            <span>collaborative thinking to further the overall value.</span>
          </div>
          <div className="flex justify-evenly items-center">
            <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 krubFont gap-5">
              <div className="grid gap-2">
                <div>
                  <img src={email} alt="Time" />
                </div>
                <div className="text-[11px] font-semibold text-white grid">
                  <span>contact@logistics.com</span>
                </div>
              </div>
              <div className="grid gap-2">
                <div>
                  <img src={call} alt="Time" />
                </div>
                <div className="text-[11px] font-semibold text-white grid">
                  <span>(00) 112 365 489</span>
                </div>
              </div>
              <div className="grid gap-2">
                <div>
                  <img src={time} alt="Time" />
                </div>
                <div className="text-[11px] font-semibold text-white grid">
                  <span>Mon - Sat 9.00 - 18.00</span>
                  <span>Sunday Closed</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="grid mt-12">
              <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 h-28 inputclass">
                <InputText
                  type="text"
                  placeholder="Your Name*"
                  className="px-2"
                />
                <InputText type="text" className="px-2" placeholder=" Email*" />
                <InputText
                  type="number"
                  className="px-2"
                  placeholder=" Phone Number*"
                />
                <InputText type="text" className="px-2" placeholder="City*" />
              </div>
              <div className="grid mt-2">
                <InputTextarea
                  value={value}
                  placeholder="Your Message*"
                  onChange={(e) => setValue(e.target.value)}
                  rows={5}
                  cols={30}
                  className="px-2"
                />
                <div className="flex justify-center items-center">
                  <div className="explore-grad choose-hover mt-6 krubFont">
                    <span className="text-[16px] xl:text-[0.833vw] flex ml-8 mt-4 font-semibold cursor-pointer">
                      Submit Message
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

export default MoreContact;
