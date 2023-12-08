import React from "react";
import yellow from "../images/styleguide/yellow.png";
import DarkBlue from "../images/styleguide/darkblue.png";
import Gray from "../images/styleguide/gray.png";
import Blue from "../images/styleguide/blue.png";
import DarkGray from "../images/styleguide/darkgray.png";
import Gradient from "../images/styleguide/gradient.png";
import defaultbutton from "../images/styleguide/defaultbutton.jpg";
import hoverbutton from "../images/styleguide/hoverbutton.png";
import Darkblue from "../images/styleguide/hoverdarkbutton.png";
import boaticon from "../images/styleguide/boaticon.png";
import planeicon from "../images/styleguide/planicon.png";
import buildingicon from "../images/styleguide/buildingicon.png";
import truckicon from "../images/styleguide/truckicon.png";
import iconOne from "../images/styleguide/iconone.png";
import iconTwo from "../images/styleguide/Icontwo.png";
import iconThree from "../images/styleguide/Iconthree.png";
import iconFour from "../images/styleguide/Iconfour.png";
import iconFive from "../images/styleguide/iconfive.png";
import iconSix from "../images/styleguide/iconsix.png";
import iconSeven from "../images/styleguide/iconseven.png";

const StyleContent = () => {
  return (
    <div>
      <div className="m-10">
        <div className="xl:flex flex-wrap">
          <div className="xl:ml-52 xl:mt-12 ml-40 mt-20 ">
            <div
              className="text-[35px] xl:text-[1.823vw] grid font-bold mt-2 rubikFont "
              style={{ lineHeight: "normal" }}
            >
              <span>Color</span>
            </div>
          </div>
          <div className="grid xl:ml-44 2xl:ml-56 xl:mt-16 ml-20 mt-12 gap-8">
            <div className="grid grid-cols-3 gap-6">
              <div className="grid">
                <img src={yellow} alt="yellow" />
                <div className="flex justify-between items-center border px-2 bg-[#F1F1F1]">
                  <span className="rubikFont text-[25px] xl:text-[1.302vw] text-[#1C1F35]">
                    FFBE34
                  </span>
                  <span className="krubFont text-[16px] xl:text-[0.833vw] text-[#666C89]">
                    Primary 1
                  </span>
                </div>
              </div>
              <div className="grid">
                <img src={DarkBlue} alt="DarkBlue" />
                <div className="flex justify-between items-center border px-2 bg-[#F1F1F1]">
                  <span className="rubikFont text-[25px] xl:text-[1.302vw] text-[#1C1F35]">
                    091242
                  </span>
                  <span className="krubFont text-[16px] xl:text-[0.833vw] text-[#666C89]">
                    Primary 2
                  </span>
                </div>
              </div>
              <div className="grid">
                <img src={Gray} alt="Gray" />
                <div className="flex justify-between items-center border px-2 bg-[#FBFBFB]">
                  <span className="rubikFont text-[25px] xl:text-[1.302vw] text-[#1C1F35]">
                    F4F4F4
                  </span>
                  <span className="krubFont text-[16px] xl:text-[0.833vw] text-[#666C89]">
                    Secondary 1
                  </span>
                </div>
              </div>
            </div>
            <div className="font-semibold rubikFont text-[25px] xl:text-[1.302vw] text-[#1C1F35]">
              Font Color
            </div>
            <div className="grid grid-cols-3 gap-6">
              <div className="grid">
                <img src={Blue} alt="Blue" />
                <div className="flex justify-between items-center border px-2 bg-[#F1F1F1]">
                  <span className="rubikFont text-[25px] xl:text-[1.302vw] text-[#1C1F35]">
                    1C1F35
                  </span>
                  <span className="krubFont text-[16px] xl:text-[0.833vw] text-[#666C89]">
                    Heading Font
                  </span>
                </div>
              </div>
              <div className="grid">
                <img src={DarkGray} alt="DarkGray" />
                <div className="flex justify-between items-center border px-2 bg-[#F1F1F1]">
                  <span className="rubikFont text-[25px] xl:text-[1.302vw] text-[#1C1F35]">
                    666C89
                  </span>
                  <span className="krubFont text-[16px] xl:text-[0.833vw] text-[#666C89]">
                    Paragraph Font
                  </span>
                </div>
              </div>
            </div>
            <div className="font-semibold rubikFont text-[25px] xl:text-[1.302vw] text-[#1C1F35]">
              Gradient
            </div>
            <div className="grid">
              <img src={Gradient} alt="Gradient" />
              <div className="flex gap-40 items-center text-[25px] xl:text-[1.302vw] rubikFont">
                <span>FFB629</span>
                <span>FFDA56</span>
                <span>FFD7A6</span>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:flex flex-wrap bg-[#F4F4F4] mt-8 pb-8">
          <div className="grid xl:ml-44 2xl:ml-56 xl:mt-16 ml-20 mt-12 gap-8">
            <div
              className="text-[35px] xl:text-[1.823vw] grid font-bold mt-2 rubikFont"
              style={{ lineHeight: "normal" }}
            >
              <span>Text</span>
            </div>
          </div>
          <div className="grid xl:ml-44 2xl:ml-56 xl:mt-16 ml-20 mt-12 gap-8">
            <div className="text-[60px] xl:text-[3.125vw] font-bold text-[#1C1F35]">
              Display Text
            </div>
            <div className="text-[50px] xl:text-[2.604vw] font-bold text-[#1C1F35]">
              Heading 01 Text
            </div>
            <div className="text-[40px] xl:text-[2.083vw] font-bold text-[#1C1F35]">
              Heading 02 Text
            </div>
            <div className="text-[35px] xl:text-[1.823vw] font-medium text-[#1C1F35]">
              Heading 03 Text
            </div>
            <div className="text-[30px] xl:text-[1.563vw] font-medium text-[#1C1F35]">
              Heading 04 Text
            </div>
            <div className="text-[25px] xl:text-[1.302vw] font-medium text-[#1C1F35]">
              Heading 05 Text
            </div>
            <div className="text-[20px] xl:text-[1.042vw] font-normal text-[#1C1F35]">
              Heading 06 Text
            </div>
          </div>
        </div>
        <div className="xl:flex flex-wrap">
          <div className="xl:ml-52 xl:mt-12 ml-40 mt-20">
            <div
              className="text-[35px] xl:text-[1.823vw] grid font-bold mt-2 rubikFont"
              style={{ lineHeight: "normal" }}
            >
              <span>Paragraph</span>
            </div>
          </div>
          <div className="grid xl:ml-44 2xl:ml-40 xl:mt-16 ml-20 mt-12 gap-8">
            <div className="text-[25px] xl:text-[1.302vw] font-medium text-[#1C1F35]">
              Para
            </div>
            <div
              className="grid text-[16px] xl:text-[0.833vw] text-[#666C89] krubFont"
              style={{ lineHeight: "23.6px" }}
            >
              <span>
                Veniam quae. Nostrum facere repellendus minus quod aut aliquam
                neque reiciendis. Qui beatae vel magnam
              </span>
              <span>
                {" "}
                repudiandae ipsum repellat repudiandae. Voluptate at dolores ut
                dolor sint occaecati similique. Velit eius ab
              </span>
              <span>delectus temporibus</span>
              <span>
                {" "}
                For dynamic content, add a rich text field to any collection and
                then connect a rich text element to that field in the
              </span>
              <span>
                settings panel. Headings, paragraphs, block-quotes, figures,
                images, and figure captions can all be styled.
              </span>
            </div>
            <div className="text-[25px] xl:text-[1.302vw] font-medium text-[#1C1F35]">
              List
            </div>
            <div className="grid text-[16px] xl:text-[0.833vw] text-[#666C89] krubFont">
              <div className="flex items-center gap-4">
                {" "}
                <i
                  className="pi pi-circle-fill"
                  style={{ fontSize: "8px" }}
                ></i>
                Efficiently myocardinate market-driven innovation.
              </div>
              <div className="flex items-center gap-4">
                {" "}
                <i
                  className="pi pi-circle-fill"
                  style={{ fontSize: "8px" }}
                ></i>
                Idea-sharing with back end products.
              </div>
              <div className="flex items-center gap-4">
                {" "}
                <i
                  className="pi pi-circle-fill"
                  style={{ fontSize: "8px" }}
                ></i>
                Ballpark value added activity to beta test.
              </div>
            </div>
            <div className="grid text-[16px] xl:text-[0.833vw] text-[#666C89] krubFont">
              <div className="flex items-center gap-4">
                {" "}
                <span>1</span>
                Efficiently myocardinate market-driven innovation.
              </div>
              <div className="flex items-center gap-4">
                {" "}
                <span>2</span>
                Idea-sharing with back end products.
              </div>
              <div className="flex items-center gap-4">
                {" "}
                <span>3</span>
                Ballpark value added activity to beta test.
              </div>
            </div>
            <div className="text-[25px] xl:text-[1.302vw] font-medium text-[#1C1F35]">
              Block Quote
            </div>
            <div className="bg-[#091242] text-white text-[20px] xl:text-[1.042vw] rubikFont px-8 py-4 flex justify-center text-center flex-col">
              <span>
                “Following the quality of our service thus having gained trust
                of our many clients.”
              </span>
            </div>
          </div>
        </div>
        <div className="xl:flex flex-wrap bg-[#F4F4F4] mt-8 pb-16">
          <div className="grid xl:ml-44 2xl:ml-56 xl:mt-16 ml-20 mt-12 gap-8">
            <div
              className="text-[35px] xl:text-[1.823vw] grid font-bold mt-2 rubikFont"
              style={{ lineHeight: "normal" }}
            >
              <span>Button</span>
            </div>
          </div>
          <div className="grid xl:ml-44 2xl:ml-56 xl:mt-16 ml-20 mt-12 gap-8">
            <div className="gap-40 flex rubikFont text-[25px] xl:text-[1.302vw] text-[#1C1F35] font-semibold">
              <div>Default</div>
              <div>Hover</div>
            </div>
            <div className="gap-16 flex rubikFont text-[25px] xl:text-[1.302vw] text-[#1C1F35] relative">
              <div>
                <img src={defaultbutton} alt="defaultButton" className="" />
                <span
                  className="absolute 2xl:bottom-[20px] xl:bottom-[20px] xl:left-[30px] lg:bottom-[15px] lg:left-[20px] md:bottom-[20px] md:left-[20px] 
                sm:bottom-[20px] sm:left-[20px]"
                >
                  Button Style
                </span>
              </div>
              <div>
                <img src={hoverbutton} alt="hoverbutton" className="" />
                <span
                  className="absolute 2xl:bottom-[20px] xl:bottom-[20px] xl:left-[280px] lg:bottom-[15px] lg:left-[280px] md:bottom-[20px] md:left-[280px] 
                sm:bottom-[20px] sm:left-[280px]"
                >
                  Button Style
                </span>
              </div>
            </div>
            <div className="gap-16 flex rubikFont text-[25px] xl:text-[1.302vw] text-[#1C1F35] relative">
              <div>
                <img src={Darkblue} alt="Darkblue" className="" />
                <span
                  className="absolute 2xl:bottom-[20px] xl:bottom-[20px] xl:left-[30px] lg:bottom-[15px] lg:left-[20px] md:bottom-[20px] md:left-[20px] 
                sm:bottom-[20px] sm:left-[20px] text-white"
                >
                  Button Style
                </span>
              </div>
              <div>
                <img src={Darkblue} alt="Darkblue" className="" />
                <span
                  className="absolute 2xl:bottom-[20px] xl:bottom-[20px] xl:left-[280px] lg:bottom-[15px] lg:left-[280px] md:bottom-[20px] md:left-[280px] 
                sm:bottom-[20px] sm:left-[280px] text-white"
                >
                  Button Style
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:flex flex-wrap mt-8 pb-16">
          <div className="grid xl:ml-44 2xl:ml-56 xl:mt-16 ml-20 mt-12 gap-8">
            <div
              className="text-[35px] xl:text-[1.823vw] grid font-bold mt-2 rubikFont"
              style={{ lineHeight: "normal" }}
            >
              <span>Icon</span>
            </div>
          </div>
          <div className="grid xl:ml-44 2xl:ml-56 xl:mt-16 ml-20 mt-12 gap-8">
            <div className="gap-40 flex">
              <div>
                <img src={boaticon} alt="boaticon" />
              </div>
              <div>
                <img src={planeicon} alt="planeicon" />
              </div>
              <div>
                <img src={buildingicon} alt="buildingicon" />
              </div>
              <div>
                <img src={truckicon} alt="truckicon" />
              </div>
            </div>
            <div className="gap-16 flex">
              <div>
                <img src={iconOne} alt="iconOne" />
              </div>
              <div>
                <img src={iconTwo} alt="iconTwo" />
              </div>
              <div>
                <img src={iconThree} alt="iconThree" />
              </div>
              <div>
                <img src={iconFour} alt="iconFour" />
              </div>
              <div>
                <img src={iconFive} alt="iconFive" />
              </div>
              <div>
                <img src={iconSix} alt="iconSix" />
              </div>
              <div>
                <img src={iconSeven} alt="iconSeven" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StyleContent;
