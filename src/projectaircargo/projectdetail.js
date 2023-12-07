import React from 'react';
import Project from "../images/projectaircargo/project.png";
import Logistic from "../images/gateway/Logistic.png";

const ProjectDetail = () => {
  return (
    <div>
       <div className="bg-[#F4F4F4] mt-4 pb-20">
      <div className="w-full flex flex-wrap justify-evenly items-center">
      <div className="mt-16">
          <img src={Project} alt="Project" style={{ width: "500px" }} />
        </div>
        <div className="gap-4 flex flex-col mt-16">
          <div
            className="grid text-[35px] font-bold xl:text-[1.823vw] rubikFont"
            style={{ lineHeight: "normal" }}
          >
            <span>Project Details</span>
          </div>
          <div className="text-[20px] xl:text-[1.042vw] grid grid-cols-2 font-normal rubikFont about-icon">
            <div>Customer :</div>
            <div>David Warner</div>
          </div>
          <div className="text-[20px] xl:text-[1.042vw] grid grid-cols-2 font-normal rubikFont about-icon">
            <div>Category : </div>
            <div>Warehouse Transportaion</div>
          </div>
          <div className="text-[20px] xl:text-[1.042vw] grid grid-cols-2 font-normal rubikFont about-icon">
            <div>Date :</div>
            <div>12 December, 2022</div>
          </div>
          <div className="text-[20px] xl:text-[1.042vw] grid grid-cols-2 font-normal rubikFont about-icon">
            <div>Status :</div>
            <div>Completed</div>
          </div>
          <div className="text-[20px] xl:text-[1.042vw] grid grid-cols-2 font-normal rubikFont about-icon">
            <div>Tags :</div>
            <div className='flex text-start'>Life Style Travel , Best Delivery</div>
          </div>
        </div>
      
      </div>
    </div> 
    </div>
  )
}

export default ProjectDetail