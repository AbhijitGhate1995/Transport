import React, { useState } from "react";
import Logistic from "../images/gateway/Logistic.png";
import { Menubar } from "primereact/menubar";
import { Link, Outlet } from "react-router-dom";
import Instagram from "../images/gateway/Instagram.png";
import Facebook from "../images/gateway/Facebook.png";
import Twitter from "../images/gateway/Twitter.png";
import Linkdin from "../images/gateway/Linkdin.png";

const ServiceHeader = () => {

    const items = [
        {
          label: "Home",
          icon: "",
          url: "/",
        },
        {
          label: "About",
          icon: "",
          url: "/aboutus",
        },
        {
          label: "Project",
          icon: "",
        },
        {
          label: "Pages",
          icon: "",
        },
        {
          label: "Contact",
          icon: "",
          url: "/contact",
        },
      ];
      const data = [
        {
          label: "Pages",
          items: [
            {
              label: "Services",
              icon: "",
              url:"/service",
            },
            {
              label: "Team",
              icon: "",
              url:"/ourteam"
            },
            {
              label: "Pricing",
              icon: "",
              url: "/pricing",
            },
            {
              label: "Blog",
              icon: "",
              url:"/blog"
            },
          ],
        },
      ];
      const [expanded, setExpanded] = useState(false);
    
      const handleMenubarClick = () => {
        setExpanded(!expanded);
      };

  return (
    <div>
        <div className="servicepage-bg pb-20">
        <div className="xl:flex flex-wrap justify-center bg-[#09124240] krubFont">
          <div className="lg:hidden flex justify-end items-center">
            <Menubar
              model={items}
              className={`px-4 py-4 bg-[#1F2A69] rounded-lg text-white ${
                expanded ? "w-32" : "w-16"
              } MenuBar-class`}
              onClick={handleMenubarClick}
            />
          </div>
          <div className="hidden lg:flex justify-center items-center">
            <div className="text-white gap-6 px-8 flex items-center justify-center nav-menu-button">
              <div className="flex-1">
                <Link to="/">
                  <div className="border-r-2 border-[#FFFFFF33] pr-6">Home</div>
                </Link>
              </div>
              <div className="flex-1">
                <Link to="/aboutus">
                  <div className="border-r-2 border-[#FFFFFF33] pr-6">
                    About
                  </div>
                </Link>
              </div>
              <Outlet />
              <Menubar model={data} className="pages-icon flex-1 " />
              <div className="flex-1">
                <div className="border-r-2 border-[#FFFFFF33] pr-6 border-l-2 pl-6">
                  Project
                </div>
              </div>
              <Link to="/contact">
                <div className="flex-1">Contact</div>
              </Link>
            </div>
          </div>

          <div className="flex justify-center items-center gap-6">
            <div className="px-24 py-6 flex justify-start items-center gap-6 ">
              <img src={Instagram} alt="instagram" />
              <img src={Facebook} alt="Facebook" />
              <img src={Twitter} alt="Twitter" />
              <img src={Linkdin} alt="Linkdin" />
            </div>
            <div className="h-full w-40 px-4 py-4 bg-white text-black flex justify-center items-center text-[14px] font-medium hover:bg-[#ffb629]">
              Request Quote
            </div>
          </div>
        </div>
        <div className="flex justify-start items-center cursor-pointer">
          <div className="xl:ml-64 xl:mt-36 ml-40 mt-20">
            <div className="grid text-[14px] xl:text-[0.729vw]">
              <div className="flex text-white rubikFont">
                <img src={Logistic} alt="Logistic" />
                <span className="bg-[#041C3780] px-2 py-1">Services</span>
              </div>
              <div
                className="grid text-white text-[60px] font-bold xl:text-[3.125vw] rubikFont cursor-pointer"
                style={{ lineHeight: "normal" }}
              >
                Our Logistics Service
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceHeader