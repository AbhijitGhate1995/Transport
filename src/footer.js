import React from "react";
import containerStorage from "./images/footer/containerStorage.png";
import TransitFlow from "./images/header/TransitFlow.png";
import call from "./images/header/call.png";
import email from "./images/header/email.png";
import { InputText } from "primereact/inputtext";
import LinkedIn from "./images/footer/linkedin.png";
import Facebook from "./images/footer/facebook.png";
import Twitter from "./images/footer/twitter.png";
import "./App.css";

const FooterData = () => {
  return (
    <div className="grid mt-24">
      <div>
        <img src={containerStorage} alt="container" />
      </div>

      <div className="w-full bg-[#091242] px-48 xl:flex flex-wrap pb-8">
        <div className="w-full grid xl:grid-cols-4 grid-cols-1 items-center justify-start mb-8">
          <div className="xl:flex flex-wrap items-center justify-center bg-[#091242] px-4 xl:mt-0 mt-2">
            <div
              className="flex items-center gap-2 md:mb-4 xl:mb-0 rubikFont"
            >
              <div>
                <img src={TransitFlow} alt="transit" />
              </div>
              <span className="text-[24px] font-semibold text-white">
                TransitFlow
              </span>
            </div>
          </div>
          <div className="xl:flex flex-wrap items-center justify-center pl-10 xl:px-20 py-4 bg-[#1F2A69] ">
            <div
              className="flex items-center gap-2 md:mb-4 xl:mb-0 rubikFont"
            >
              <span className="text-[24px] font-semibold text-white">
                Pages
              </span>
            </div>
          </div>
          <div className="xl:flex flex-wrap items-center justify-center  pl-10 xl:px-20 py-4 bg-[#1F2A69] ">
            <div
              className="flex items-center gap-2 md:mb-4 xl:mb-0 rubikFont"
            >
              <span className="text-[24px] font-semibold text-white">
                Utility
              </span>
            </div>
          </div>
          <div className="xl:flex flex-wrap items-center justify-center  pl-10 xl:px-20 py-4 bg-[#1F2A69] ">
            <div className="flex items-center gap-2 md:mb-4 xl:mb-0">
              <span className="text-[24px] font-semibold text-white">
                Subscribe
              </span>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-evenly items-center">
          <div className="grid xl:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 gap-8">
            <div className="grid gap-4">
              <div
                className="text-[#E8E8E8] text-[16px] xl:text-[0.833vw] grid font-medium krubFont"
                style={{
                  lineHeight: "24.244px",
                }}
              >
                <span>Leverage agile frameworks to provide a robust</span>
                <span>synopsis for strategy collaborative thinking to</span>
                <span>further the overall value proposition.</span>
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
            <div className="grid xl:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-2">
              <div
                className="grid text-16px xl:text-[0.833vw] text-white krubFont"
                style={{ lineHeight: "40px" }}
              >
                <span>About Us</span>
                <span>Our Team</span>
                <span>Our Project</span>
                <span>Pricing</span>
                <span>Contact</span>
              </div>
              <div
                className="grid text-16px xl:text-[0.833vw] text-white krubFont"
                style={{ lineHeight: "40px" }}
              >
                <span>Style Guide</span>
                <span>Changelog</span>
                <span>Licenses</span>
                <span>Protected</span>
                <span>Not Found</span>
              </div>
            </div>
            <div
              className="flex flex-col text-16px xl:text-[0.833vw] inputclass krubFont"
            >
              <InputText type="text" className="px-2 xl:h-12 h-12" placeholder=" Email*" />
              <div className="grid xl:grid-cols-2 grid-cols-1 gap-2">
                <div
                  className="send-grad send-hover mt-6 flex gap-2 krubFont cursor-pointer"
                >
                  <span className="text-[16px] xl:text-[0.833vw] flex items-center ml-7 font-semibold">
                    Send Now
                  </span>
                </div>
                <div className="flex justify-start items-start gap-4 mt-10">
                  <img src={LinkedIn} alt="LinkedIn" />
                  <img src={Twitter} alt="Twitter" />
                  <img src={Facebook} alt="Facebook" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#091242] px-48 py-4 xl:flex flex-wrap justify-between items-center border-t-2 border-[#fff]">
        <div
          className="text-[16px] xl:text-[0.833vw] font-medium text-[#fff] krubFont"
        >
          Copyright © TransitFlow | Designed by VictorFlow - Powered by Webflow.
        </div>
        <div
          className="text-[#8388A7] font-normal text-[16px] xl:text-[0.833vw] flex gap-4 krubFont"
        >
          <span>Style Guide</span>
          <span>Licenses</span>
          <span>Changelog</span>
          <span>Password</span>
        </div>
      </div>
    </div>
  );
};

export default FooterData;
