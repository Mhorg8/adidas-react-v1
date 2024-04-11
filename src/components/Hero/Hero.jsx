import React from "react";
import HeroImg from "../../assets/hero.avif";
import PrimaryBtn from "../Button";
const Hero = () => {
  return (
    <div className="hero w-full h-[85vh] overflow-hidden relative">
      <img
        className="w-full h-full object-cover object-right md:object-center"
        src={HeroImg}
        alt="runing shoes"
      />

      <div className="absolute z-10 bottom-4 left-10 md:left-32 flex flex-col gap-y-5">
        <h2 className="font-bold text-white text-[30px] md:text-4xl leading-10  select-none">
          SUPERCOMFORT. <br className="hidden md:block" /> SUPERNOVA
        </h2>
        <p className="text-white text-xl leading-6">
          Experince maximum comfort.
        </p>
        <div className="flex gap-x-3">
          <PrimaryBtn>
            SHOP WOMEN{" "}
            <i className="ri-arrow-right-line text-xl font-medium"></i>
          </PrimaryBtn>
          <PrimaryBtn>
            SHOP MEN <i className="ri-arrow-right-line text-xl font-medium"></i>
          </PrimaryBtn>
        </div>
      </div>
    </div>
  );
};

export default Hero;
