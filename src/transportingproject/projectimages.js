import React from "react";
import Truck from "../images/ourproject/truck.png";
import Packaging from "../images/ourproject/packaging.png";
import Plane from "../images/ourproject/plane.png";
import Runway from "../images/ourproject/runway.png";
import Highway from "../images/ourproject/highway.png";
import Transport from "../images/ourproject/transport.png";
import { Link, Outlet } from "react-router-dom";

const ProjectImages = () => {
  return (
    <div className="mt-12">
      <div className="bg-white mx-40 xl:my-0 md:my-20 my-[500px]">
        <div className="w-full grid gap-8">
          <div className="flex justify-center items-center">
            <div className="grid xl:grid-cols-3 grid-cols-2 gap-6">
              <Link to="/ourproject/aircargo">
                <div className="grid">
                  <img src={Truck} alt="Truck" />
                </div>
              </Link>
                <div className="grid">
                  <img src={Packaging} alt="Packaging" />
                </div>
                <div className="grid">
                  <img src={Plane} alt="Plane" />
                </div>
                <div className="grid">
                  <img src={Transport} alt="Transport" />
                </div>
                <div className="grid">
                  <img src={Runway} alt="Runway" />
                </div>
                <div className="grid">
                  <img src={Highway} alt="Highway" />
                </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet/>
    </div>
  );
};

export default ProjectImages;
