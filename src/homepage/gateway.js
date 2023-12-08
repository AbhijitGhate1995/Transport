import React, { useState } from "react";
import Instagram from "../images/gateway/Instagram.png";
import Facebook from "../images/gateway/Facebook.png";
import Twitter from "../images/gateway/Twitter.png";
import Linkdin from "../images/gateway/Linkdin.png";
import Logistic from "../images/gateway/Logistic.png";
import { Menubar } from "primereact/menubar";
import "../App.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Outlet, Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";

const GateWayData = () => {
  const navigate = useNavigate();
  const items = [
    {
      label: "Home",
      icon: "",
      command: () => {navigate('/') },
    },
    {
      label: "About",
      icon: "",
      command: () => {navigate('/aboutus') },
    },
    {
      label: "Project",
      icon: "",
      command: () => {navigate('/ourproject') },
    },
    {
      label: "Contact",
      icon: "",
      command: () => {navigate('/contact') },
    },
  ];
  const data = [
    {
      label: "Pages",
      items: [
        {
          label: "Services",
          command: () => {navigate('/service') },
        },
        {
          label: "Service Single",
          command: () => {navigate('/servicesingle') },
        },
        {
          label: "Team",
          command: () => {navigate('/ourteam') },
        },
        {
          label: "Pricing",
          command: () => {navigate('/pricing') },
        },
        {
          label: "Blog",
          command: () => {navigate('/blog') },
        },
      ],
    },
  ];
  const [expanded, setExpanded] = useState(false);

  const handleMenubarClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="gateway-bg pb-20">
      <div className="xl:flex flex-wrap justify-center bg-[#09124240] krubFont">
      
        <div className="hidden lg:flex justify-center items-center">
          <div className="text-white gap-6 px-8 flex items-center justify-center nav-menu-button">
            <div className="flex-1">
              <div className="border-r-2 border-[#FFFFFF33] pr-6">Home</div>
            </div>
            <div className="flex-1">
              <Link to="/aboutus">
                <div className="border-r-2 border-[#FFFFFF33] pr-6">About</div>
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
      <div className="lg:hidden flex justify-start items-center">
          <Menubar
            model={items}
            className={`px-4 py-4 bg-[#1F2A69] rounded-lg text-white ${
              expanded ? "w-full" : "w-16"
            } MenuBar-class`}
            onClick={handleMenubarClick}
          />
        </div>
      <div className="flex justify-start items-center cursor-pointer">
        <div className="xl:ml-64 xl:mt-36 ml-40 mt-20">
          <div className="grid text-[14px] xl:text-[0.729vw]">
            <div className="flex text-white rubikFont">
              <img src={Logistic} alt="Logistic" />
              <span className="bg-[#041C3780] px-2 py-1">
                Logistics & Supply Chain Solutions
              </span>
            </div>
            <div
              className="grid text-white text-[60px] font-bold xl:text-[3.125vw] rubikFont cursor-pointer"
              style={{ lineHeight: "normal" }}
            >
              <span>Your Gateway</span>
              <span>to any Destination</span>
              <span>in the World</span>
            </div>
            <div
              className="grid text-white text-[16px] xl:text-[0.833vw] font-normal krubFont"
              style={{ lineHeight: "24.244px" }}
            >
              <span>
                In augue ligula, feugiat ut nulla consequat. Ut est lacus,
                molestie in arcu
              </span>
              <span>
                no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus
                finibus, enim
              </span>
              <span>diam interdum nulla, sed laoreet risus lectus.</span>
            </div>
            <div className="explore-grad explore-hover mt-6 krubFont cursor-pointer">
              <Link to="/aboutus">
                <span className="text-[16px] xl:text-[0.833vw] flex ml-12 mt-4 font-medium">
                  Explore More
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GateWayData;
