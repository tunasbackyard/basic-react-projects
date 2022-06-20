import React from "react";
import hero from "../images/hero.svg";
import phone from "../images/phone.svg";

const Hero = () => {
  return (
    <div className="mx-auto my-8  overflow-hidden px-20">
      <img className="w-full" src={hero} alt="" />
      <h1 className="absolute top-56 left-56 text-5xl font-bold">
        <span className="px-5 bg-gray-50 rounded-lg mr-4">Payments</span>
        infrastructure
        <span className="block my-4">for the internet</span>
      </h1>
      <img className="absolute top-28 right-44" src={phone} alt="" />
    </div>
  );
};

export default Hero;
