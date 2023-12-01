import React from "react";
import TransitFlow from "./images/header/TransitFlow.png";
import time from "./images/header/time.png";
import call from "./images/header/call.png";
import email from "./images/header/email.png";
import "./App.css";


const HeaderData = () => {
  return (
    <div className="w-full px-20 py-10 bg-[#091242] xl:flex flex-wrap items-center justify-center gap-28">
      <div className="flex items-center gap-2 md:mb-4 xl:mb-0 rubikFont">
        <div>
          <img src={TransitFlow} alt="transit" />
        </div>
        <span className="text-[24px] font-semibold text-white">
          TransitFlow
        </span>
      </div>
      <div className="grid grid-cols-3 gap-5 krubFont">
        <div className="flex items-center  gap-2">
          <div>
            <img src={time} alt="Time" />
          </div>
          <div className="text-[11px] font-semibold text-white grid">
            <span>Mon - Sat 9.00 - 18.00</span>
            <span>Sunday Closed</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div>
            <img src={email} alt="Time" />
          </div>
          <div className="text-[11px] font-semibold text-white grid">
            <span>Email</span>
            <span>contact@logistics.com</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div>
            <img src={call} alt="Time" />
          </div>
          <div className="text-[11px] font-semibold text-white grid">
            <span>Call Us</span>
            <span>(00) 112 365 489</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderData;
