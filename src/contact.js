import React, { useState } from "react";
import Logistic from "./images/gateway/Logistic.png";
import time from "./images/header/time.png";
import call from "./images/header/call.png";
import email from "./images/header/email.png";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import Container from "./images/contact/container.jpg";
import Mountain from "./images/contact/mountain.jpg";
import Plane from "./images/contact/plain.jpg";
import Snow from "./images/contact/snowmountain.jpg";
import "./App.css";

const ContactData = () => {
  const [value, setValue] = useState("");
  return (
    <div className="bg-[#091242]">
      <div className="mx-48 my-40 pt-24 pb-20">
        <div className="w-full grid xl:grid-cols-2 grid-cols-1 gap-8">
          <div className="grid gap-2">
            <div
              className="flex justify-start items-center rubikFont"
            >
              <img src={Logistic} alt="Logistic" />
              <span className="bg-[#E8E8E880] text-[#FFFFFF] px-2 py-1 text-[14px] xl:text-[0.729vw]">
                Contact
              </span>
            </div>
            <div
              className="grid text-[35px] font-bold xl:text-[1.823vw] text-white rubikFont"
              style={{ lineHeight: "normal" }}
            >
              <span>Get in touch with us</span>
            </div>
            <div
              className="grid text-[16px] xl:text-[0.833vw] font-normal text-white krubFont"
              style={{ lineHeight: "24.244px"}}
            >
              <span>Leverage agile frameworks to provide a robust</span>
              <span>synopsis for strategy foster collaborative thinking</span>
              <span>to further the overall value.</span>
            </div>
            <div
              className="grid xl:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 krubFont"
             
            >
              <div className="flex items-center gap-2">
                <div>
                  <img src={time} alt="Time" />
                </div>
                <div
                  className="text-[14px] xl:text-[0.729vw] font-semibold text-white grid"
                  style={{ lineHeight: "18.903px" }}
                >
                  <span>Mon - Sat 9.00 - 18.00</span>
                  <span>Sunday Closed</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <img src={email} alt="Time" />
                </div>
                <div
                  className="text-[14px] xl:text-[0.729vw] font-semibold text-white grid"
                  style={{ lineHeight: "18.903px" }}
                >
                  <span>Email</span>
                  <span>contact@logistics.com</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <img src={call} alt="Time" />
                </div>
                <div
                  className="text-[14px] xl:text-[0.729vw] font-semibold text-white grid"
                  style={{ lineHeight: "18.903px" }}
                >
                  <span>Call Us</span>
                  <span>(00) 112 365 489</span>
                </div>
              </div>
            </div>
          </div>
          <div className="grid mt-12">
            <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-4 h-28 inputclass">
              <InputText
                type="text"
                placeholder="Your Name*"
                className="px-2"
              />
              <InputText type="text" className="px-2" placeholder=" Email*" />
              <InputText type="number" className="px-2" placeholder=" Phone Number*" />
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
              <div
                className="explore-grad explore-hover mt-6 krubFont"
              >
                <span className="text-[16px] xl:text-[0.833vw] flex ml-8 mt-4 font-semibold cursor-pointer">
                  Submit Message
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid xl:grid-cols-4 grid-cols-2 mt-16">
          <img src={Container} alt="Container" />
          <img src={Mountain} alt="Mountain" />
          <img src={Plane} alt="Plane" />
          <img src={Snow} alt="SnowMountain" />
        </div>
      </div>
    </div>
  );
};

export default ContactData;
