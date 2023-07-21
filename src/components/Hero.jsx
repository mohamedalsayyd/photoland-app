import React from "react";
import MainSlider from "./MainSlider";
import PromoImg1 from "../img/promo_img1.png";
import PromoImg2 from "../img/promo_img2.png";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="mb-[30px] pt-36 lg:pt-0">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-[30px] xl:flex-row xl:gap-x-[30px]">
          {/* side bar  */}
          <div>{/* <CategoryNav /> */}</div>
          {/* main slider  */}
          <div className="w-full max-w-lg lg:max-w-[734px] mx-auto">
            <MainSlider />
          </div>
          {/* promo imgs  */}
          <div className="flex flex-col gap-y-[30px] w-full max-w-lg max-auto h-[500px]">
            <div className="grad flex-1 h-[250px] rounded-[8px] overflow-hidden relative p-6">
              <div className="flex flex-col max-w-[144px] h-full justify-center">
                <div className="text-[20px] uppercase font-medium leading-tight mb-4">
                  Save 35% all dslr cameras
                </div>
                <Link to="/product/2" className="uppercase text-accent">
                  Shop now
                </Link>
                <img
                  className=" absolute z-20 -top-2 -right-4"
                  src={PromoImg1}
                  alt=""
                />
              </div>
            </div>
            <div className="grad flex-1 h-[250px] rounded-[8px] overflow-hidden relative p-6">
              <div className="flex flex-col max-w-[144px] h-full justify-center">
                <div className="text-[20px] uppercase font-medium leading-tight mb-4">
                  Save 25% all mirrorless cameras
                </div>
                <Link to="/product/3" className="uppercase text-accent">
                  Shop now
                </Link>
                <img
                  className=" absolute z-20 top-2 -right-4"
                  src={PromoImg2}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
