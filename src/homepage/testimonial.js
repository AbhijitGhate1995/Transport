import React, { useEffect, useState } from "react";
import Logistic from "../images/gateway/Logistic.png";
import Arrow from "../images/testimonial/Arrow.png";
import comma from "../images/testimonial/comma.png";
import star from "../images/testimonial/Star.png";
import "../App.css";
import { ProductService } from "../service/productservice";
import { Carousel } from "primereact/carousel";

const TestimonialData = () => {
  const [products, setProducts] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const responsiveOptions = [
    {
      breakpoint: "1500px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "1199px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "991px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "400px",
      numVisible: 1,
      numScroll: 1,
    },
  ];
  useEffect(() => {
    ProductService.getProductsSmall().then((data) =>
      setProducts(data.slice(0, 9))
    );
  }, []);

  const productTemplate = (product) => {
    return (
      <div className="w-full grid px-16 py-12" style={{ backgroundColor: product.background, color: product.textColor  }}>
        <div className="w-full grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2">
          <div className="w-full flex gap-2">
          <img src={product.image} alt={product.name} className="rounded-full" />
            <div className="flex flex-col items-start justify-center ">
              <span
                className="text-[20px] xl:text-[1.042vw] font-medium rubikFont"
                style={{ lineHeight: "normal" }}
              >
              {product.name}
              </span>
              <span
                className="text-[16px] xl:text-[0.833vw] krubFont"
                style={{ lineHeight: "normal" }}
              >
              {product.company}
              </span>
            </div>
          </div>
          <div className="flex justify-end items-center">
            <img src={comma} alt="comma" />
          </div>
        </div>
        <div
          className="text-[16px] xl:text-[0.833vw] grid italic mt-8 krubFont"
          style={{ lineHeight: "24.244px" }}
        >
          <span>
            Leverage agile frameworks to provide a robust synopsis for
          </span>
          <span>
            strategy foster collaborative thinking to further the overall
          </span>
          <span>
            {" "}
            value proposition. Organically grow the holistic world view
          </span>
          <span>of disruptive innovation via workplace diversity and</span>
          <span>empowerment.</span>
        </div>
        <div className="mt-6">
          <img src={star} alt="star" />
        </div>
      </div>
    );
  };

  return (
    <div className="mx-40 mb-20 mt-8">
      <div className="w-full flex justify-center items-center">
        <div className="grid w-full">
          <div className="flex justify-start items-center w-full rubikFont">
            <img src={Logistic} alt="Logistic" />
            <span className="bg-[#E8E8E880] px-2 py-1 text-[14px] xl:text-[0.729vw]">
              Testimonial
            </span>
          </div>
          <div className="xl:flex flex-wrap justify-between w-full">
            <div className="text-[35px] xl:text-[1.823vw] font-semibold">
              What Our Customer Say
            </div>
            <div className="flex gap-4">
              <img src={Arrow} alt={Arrow} />
            </div>
          </div>
          <div className="w-full grid xl:grid-cols-1 lg:grid-cols-1 mt-8">
            <Carousel value={products} numVisible={2} numScroll={1} responsiveOptions={responsiveOptions}
             activeIndex={activeIndex}
             onItemChange={(e) => setActiveIndex(e.index)}
             itemTemplate={productTemplate} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialData;
