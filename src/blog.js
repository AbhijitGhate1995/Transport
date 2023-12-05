import React from "react";
import Logistic from "./images/gateway/Logistic.png";
import Container from "./images/blog/container.png";
import Calender from "./images/blog/calender.png";
import "primeicons/primeicons.css";
import Boat from "./images/blog/boat.png";
import Supply from "./images/blog/supply.png";
import "./App.css";

// import ReadMore from "./images/blog/readmore.png";

const BlogData = () => {
  return (
    <div>
      <div className="bg-[#FFF]">
        <div className="w-full grid gap-8 mb-10">
          <div className="flex justify-center items-center w-full rubikFont">
            <img src={Logistic} alt="Logistic" />
            <span className="bg-[#E8E8E880] px-2 py-1 text-[14px] xl:text-[0.729vw]">
              Our Blog
            </span>
          </div>
          <div className="flex justify-center items-center text-[35px] font-bold xl:text-[1.823vw] rubikFont">
            <span>Our Latest News</span>
          </div>
          <div className="flex justify-center items-center">
            <div className="grid xl:grid-cols-1">
              <div className="xl:flex flex-wrap gap-12 border-t-2 border-b-2 py-6">
                <img src={Container} alt="Container" />
                <div className="xl:block flex items-center gap-5">
                  <img
                    src={Calender}
                    alt="Calender"
                    className="h-[50px] w-[50px]"
                  />
                  <div className="grid">
                    <span className="text-[40px] font-semibold xl:text-[2.083vw] rubikFont ml-1">
                      08
                    </span>
                    <span className="text-[#666C89] text-[16px] xl:text-[0.833vw] krubFont">
                      September
                    </span>
                  </div>
                </div>
                <div className="grid border-l-2 px-4">
                  <div className="text-[25px] xl:text-[1.302vw] grid rubikFont" style={{lineHeight: "normal" }}>
                    <span>Inland freight a worthy</span>
                    <span>solution for your business</span>
                  </div>
                  <div className="text-[#666C89] text-[16px] xl:text-[0.833vw] grid krubFont" style={{lineHeight: "24.244px" }}>
                    <span>We are dedicated in creating added value</span>
                    <span>for our customers by implementing modern</span>
                    <span>technology in our work.</span>
                  </div>
                  <div className="grid text-[#1C1F35] krubFont" style={{ lineHeight:"26.644px" }}>
                    <span className="flex items-center gap-1">
                      <i
                        className="pi pi-circle-fill"
                        style={{ fontSize: "6px" }}
                      ></i>
                      Urgent transport solutions
                    </span>
                    <span className="flex items-center gap-1">
                      <i
                        className="pi pi-circle-fill"
                        style={{ fontSize: "6px" }}
                      ></i>
                      Reliable & experienced staffs
                    </span>
                    <span className="flex items-center gap-1">
                      <i
                        className="pi pi-circle-fill"
                        style={{ fontSize: "6px" }}
                      ></i>
                      Urgent transport solutions
                    </span>
                    <span className="flex items-center gap-1">
                      <i
                        className="pi pi-circle-fill"
                        style={{ fontSize: "6px" }}
                      ></i>
                      Reliable & experienced staffs
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="grid xl:grid-cols-1">
              <div className="xl:flex flex-wrap gap-12 border-t-2 border-b-2 py-6">
                <div>
                  <img src={Supply} alt="Supply" className="" />
                  {/* <img
                    src={ReadMore}
                    alt="ReadMore"
                    style={{ height: "100px", width: "100px" }}
                    className="flex justify-center items-center ml-[80px] top-[-250px] z-20"
                  /> */}
                  {/* <span className=" text-white text-[16px] xl:text-[0.833vw] flex justify-center items-center ml-[80px] top-[-250px]">
                    <img src={}/>
                  </span> */}
                </div>
                <div className="">
                  <div className="xl:block flex items-center gap-5">
                    <img
                      src={Calender}
                      alt="Calender"
                      className="h-[50px] w-[50px]"
                    />
                    <div className="grid">
                      <span className="text-[40px] font-semibold xl:text-[2.083vw] rubikFont ml-2">
                        12
                      </span>
                      <span className="text-[#666C89] text-[16px] xl:text-[0.833vw] krubFont">
                        September
                      </span>
                    </div>
                  </div>
                </div>
                <div className="grid border-l-2 px-4">
                  <div className="text-[25px] xl:text-[1.302vw] grid rubikFont" style={{lineHeight: "normal" }}>
                    <span>How technology can help redraw</span>
                    <span> the supply chain map</span>
                  </div>
                  <div className="text-[#666C89] text-[16px] xl:text-[0.833vw] grid krubFont" style={{lineHeight: "24.244px" }}>
                    <span>We are dedicated in creating added value</span>
                    <span>for our customers by implementing modern</span>
                    <span>technology in our work.</span>
                  </div>
                  <div className="grid text-[#1C1F35] krubFont" style={{lineHeight:"26.644px" }}>
                    <span className="flex items-center gap-1">
                      <i
                        className="pi pi-circle-fill"
                        style={{ fontSize: "6px" }}
                      ></i>
                      Urgent transport solutions
                    </span>
                    <span className="flex items-center gap-1">
                      <i
                        className="pi pi-circle-fill"
                        style={{ fontSize: "6px" }}
                      ></i>
                      Reliable & experienced staffs
                    </span>
                    <span className="flex items-center gap-1">
                      <i
                        className="pi pi-circle-fill"
                        style={{ fontSize: "6px" }}
                      ></i>
                      Urgent transport solutions
                    </span>
                    <span className="flex items-center gap-1">
                      <i
                        className="pi pi-circle-fill"
                        style={{ fontSize: "6px" }}
                      ></i>
                      Reliable & experienced staffs
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="grid xl:grid-cols-1">
              <div className="xl:flex flex-wrap gap-12 border-t-2 border-b-2 py-6">
                <img src={Boat} alt="Boat" />
                <div className="">
                  <div className="xl:block flex items-center gap-5">
                    <img
                      src={Calender}
                      alt="Calender"
                      className="h-[50px] w-[50px]"
                    />
                    <div className="grid">
                      <span className="text-[40px] font-semibold xl:text-[2.083vw] rubikFont ml-1">
                        25
                      </span>
                      <span className="text-[#666C89] text-[16px] xl:text-[0.833vw] krubFont">
                        September
                      </span>
                    </div>
                  </div>
                </div>
                <div className="grid border-l-2 px-4">
                  <div className="text-[25px] xl:text-[1.302vw] grid rubikFont" style={{lineHeight: "normal" }}>
                    <span>Five things you should have </span>
                    <span>ready for your broker</span>
                  </div>
                  <div className="text-[#666C89] text-[16px] xl:text-[0.833vw] grid krubFont" style={{lineHeight: "24.244px"}}>
                    <span>We are dedicated in creating added value</span>
                    <span>for our customers by implementing modern</span>
                    <span>technology in our work.</span>
                  </div>
                  <div className="grid text-[#1C1F35] krubFont" style={{lineHeight:"26.644px" }}>
                    <span className="flex items-center gap-1">
                      <i
                        className="pi pi-circle-fill"
                        style={{ fontSize: "6px" }}
                      ></i>
                      Urgent transport solutions
                    </span>
                    <span className="flex items-center gap-1">
                      <i
                        className="pi pi-circle-fill"
                        style={{ fontSize: "6px" }}
                      ></i>
                      Reliable & experienced staffs
                    </span>
                    <span className="flex items-center gap-1">
                      <i
                        className="pi pi-circle-fill"
                        style={{ fontSize: "6px" }}
                      ></i>
                      Urgent transport solutions
                    </span>
                    <span className="flex items-center gap-1">
                      <i
                        className="pi pi-circle-fill"
                        style={{ fontSize: "6px" }}
                      ></i>
                      Reliable & experienced staffs
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center items-center cursor-pointer">
            <div className="morework-grad morework-hover flex items-center justify-center">
              <span className="text-[16px] xl:text-[0.833vw] flex font-medium text-white krubFont">
                More Blog
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogData;
