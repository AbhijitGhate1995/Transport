import React from "react";
import Transportion from "../images/projectaircargo/transportation.png"

const WarehouseTransportaion = () => {
  return (
    <div>
      <div className="m-10">
        <div className="grid xl:grid-cols-1 lg:grid-cols-1 grid-cols-1">
          <div className="xl:mx-52 xl:mt-12 mx-40 mt-20 grid gap-2">
            <div
              className="text-[35px] xl:text-[1.823vw] grid font-bold mt-2 rubikFont"
              style={{ lineHeight: "normal" }}
            >
              <span>Wharehouse Transportation</span>
            </div>
            <div
              className="krubFont text-[16px] xl:text-[0.833vw]  text-[#666C89] font-medium"
              style={{ lineHeight: "24.244px" }}
            >
              <span>
              Duis semper lacus scelerisque, aliquam leo quis, porttitor leo.
               Etiam lobortis dapibus libero vel porttitor. Nulla tempor elit nec feugiat tempus.Phasellus at
              </span>
              <span>
              quam id elit hendrerit semper feugiat id nunc. Morbi quis justo velit.
               Duis semper lacus scelerisque, aliquam leo quis, porttitor leo. Fusce lectus ex, pretium
              </span>
              <span>
              efficitur suscipit sed, faucibus vel elit Integer adipiscing erat eget risus sollicitudin 
              pellentesque non erat. Maecenas nibh dolor malesuada sagittis accumsan
              </span>
              <span>ipsum. Pellentesque ultrices ultrices sapien, nec tincidunt nunc posuere.</span>
            </div>
            <div className="grid text-[#1C1F35] xl:text-[1.042vw] text-[20px] gap-4">
                <div className="flex items-center gap-2">
                    <i className="pi pi-arrow-right"></i>
                    <div>National Customer Service Center – 24 hours a day.</div>
                </div>
                <div className="flex items-center gap-2">
                    <i className="pi pi-arrow-right"></i>
                    <div>Online shipping navigator lets you quote, book, and track shipments.</div>
                </div>
                <div className="flex items-center gap-2">
                    <i className="pi pi-arrow-right"></i>
                    <div>Your Logistics Needs Are At The Heart Of Our Business</div>
                </div>
                <div className="flex items-center gap-2">
                    <i className="pi pi-arrow-right"></i>
                    <div>Very careful handling of valuable goods</div>
                </div>
                <div className="flex items-center gap-2">
                    <i className="pi pi-arrow-right"></i>
                    <div>Time saving and convenient transportation services in your area</div>
                </div>
            </div>
            <div
              className="text-[35px] xl:text-[1.823vw] grid font-bold mt-6 rubikFont"
              style={{ lineHeight: "normal" }}
            >
              <span>Our Project Transportation</span>
            </div>
            <div
              className="krubFont text-[16px] xl:text-[0.833vw]  text-[#666C89] font-medium"
              style={{ lineHeight: "24.244px" }}
            >
            <span>
              Duis semper lacus scelerisque, aliquam leo quis, porttitor leo.
               Etiam lobortis dapibus libero vel porttitor. Nulla tempor elit nec feugiat tempus.Phasellus at
              </span>
              <span>
              quam id elit hendrerit semper feugiat id nunc. Morbi quis justo velit.
               Duis semper lacus scelerisque, aliquam leo quis, porttitor leo. Fusce lectus ex, pretium
              </span>
              <span>
              efficitur suscipit sed, faucibus vel elit Integer adipiscing erat eget risus sollicitudin 
              pellentesque non erat. Maecenas nibh dolor malesuada sagittis accumsan
              </span>
              <span>ipsum. Pellentesque ultrices ultrices sapien, nec tincidunt nunc posuere.</span>
              </div>
            <div className="mt-4"><img src={Transportion} alt="Transportion" /> </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WarehouseTransportaion;
