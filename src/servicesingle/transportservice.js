import React from "react";
import Boat from "../images/servicesingle/boat.png";
import BoatIcon from "../images/servicesingle/boaticon.png";

const TransportService = () => {
  return (
    <div>
      <div className="grid xl:grid-cols-1 lg:grid-cols-1 grid-cols-1 mb-12">
        <div className="xl:mx-52 xl:mt-12 mx-40 mt-20 grid gap-12">
          <div>
            <img src={Boat} alt="Boat" />
          </div>
          <div
            className="text-[35px] xl:text-[1.823vw] font-bold rubikFont flex items-center gap-2"
            style={{ lineHeight: "normal" }}
          >
            <img src={BoatIcon} alt="BoatIcon" />
            <span>Sea Transport Services</span>
          </div>
          <div
            className="krubFont text-[16px] xl:text-[0.833vw]  text-[#666C89] font-medium"
            style={{ lineHeight: "24.244px" }}
          >
            <span>
              Duis semper lacus scelerisque, aliquam leo quis, porttitor leo.
              Etiam lobortis dapibus libero vel porttitor. Nulla tempor elit nec
              feugiat tempus.Phasellus at
            </span>
            <span>
              quam id elit hendrerit semper feugiat id nunc. Morbi quis justo
              velit. Duis semper lacus scelerisque, aliquam leo quis, porttitor
              leo. Fusce lectus ex, pretium
            </span>
            <span>
              efficitur suscipit sed, faucibus vel elit Integer adipiscing erat
              eget risus sollicitudin pellentesque non erat. Maecenas nibh dolor
              malesuada sagittis accumsan
            </span>
            <span>
              ipsum. Pellentesque ultrices ultrices sapien, nec tincidunt nunc
              posuere.
            </span>
          </div>
          <div
            className="krubFont text-[16px] xl:text-[0.833vw]  text-[#666C89] font-medium"
            style={{ lineHeight: "24.244px" }}
          >
            <span>
              Quis autem vel eum iure reprehenderit, qui in ea voluptate velit
              esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum
              fugiat, quo voluptas nulla
            </span>
            <span>
              pariatur? At vero eos et accusamus et iusto odio dignissimos
              ducimus, qui blanditiis praesentium voluptatum deleniti atque
              corrupti, quos dolores et quas
            </span>
            <span>
              molestias excepturi sint, obcaecati cupiditate non provident,
              similique sunt in culpa, qui officia deserunt mollitia animi, id
              est laborum et dolorum fuga. Et
            </span>
            <span>harum quidem rerum facilis est et expedita distinctio.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransportService;
