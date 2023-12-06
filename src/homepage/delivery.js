import React from "react";
import delivery from "../images/delivery/delivered.png";
import "../App.css";


const DeliveryData = () => {
  return (
    <div className="w-full xl:flex flex-wrap justify-center items-center mt-[1000px] mb-10 rubikFont">
      <div className="flex justify-center items-center border-t-2 border-r-2 border-b-2 gap-2 px-20 py-8">
        <span className="text-[50px] xl:text-[2.604vw] font-semibold">
          1294
        </span>
        <img src={delivery} alt="Delivery" />
        <span className="text-[20px] xl:text-[1.042vw] League text-[#1C1F35]">
          Delivered Packages
        </span>
      </div>
      <div className="flex justify-center items-center border-t-2 border-b-2 gap-2 px-20 py-8">
        <span className="text-[50px] xl:text-[2.604vw] font-semibold">
          3594
        </span>
        <img src={delivery} alt="Delivery" />
        <span className="text-[20px] xl:text-[1.042vw] League text-[#1C1F35]">
          Satisfied Clients
        </span>
      </div>
    </div>
  );
};

export default DeliveryData;
