import React from "react";
import delivery from "../images/delivery/delivered.png";
import "../App.css";

const FooterDelivery = () => {
  return (
    <div>
      <div className="w-full  grid xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 justify-center items-center mt-[50px] mb-10 rubikFont">
        <div className="flex justify-center items-center border-t-2 border-r-2 border-b-2 gap-2 px-20 py-8">
          <span className="text-[50px] xl:text-[2.604vw] font-semibold">
            24
          </span>
          <img src={delivery} alt="Delivery" />
          <span className="text-[20px] xl:text-[1.042vw] League text-[#1C1F35]">
            Our Location
          </span>
        </div>
        <div className="flex justify-center items-center border-t-2 border-b-2 gap-2 px-20 py-8">
          <span className="text-[50px] xl:text-[2.604vw] font-semibold">
            1294
          </span>
          <img src={delivery} alt="Delivery" />
          <span className="text-[20px] xl:text-[1.042vw] League text-[#1C1F35]">
            Delivered Packages
          </span>
        </div>
        <div className="flex justify-center items-center border-t-2 border-r-2 border-b-2 gap-2 px-20 py-8">
          <span className="text-[50px] xl:text-[2.604vw] font-semibold">
            3594
          </span>
          <img src={delivery} alt="Delivery" />
          <span className="text-[20px] xl:text-[1.042vw] League text-[#1C1F35]">
            Satisfied Clients
          </span>
        </div>
        <div className="flex justify-center items-center border-t-2 border-b-2 gap-2 px-20 py-8">
          <span className="text-[50px] xl:text-[2.604vw] font-semibold">
            247+
          </span>
          <img src={delivery} alt="Delivery" />
          <span className="text-[20px] xl:text-[1.042vw] League text-[#1C1F35]">
            Owned Vehicles
          </span>
        </div>
      </div>
    </div>
  );
};

export default FooterDelivery;
