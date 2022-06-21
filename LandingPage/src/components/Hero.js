import React from "react";
import hero from "../images/hero.svg";
import phone from "../images/phone.svg";

const Hero = () => {
  return (
    <section className="container absolute top-0 left-0 -z-10 text-gray-800">
      <img className="w-full" src={hero} alt="" />
      <img className="absolute top-20 right-28" src={phone} alt="" />
      <div className="absolute top-24 left-28 max-w-4xl">
        <h2 className="text-7xl font-bold">
          Payments infrastructure for the internet
        </h2>
        <p className="my-5 text-xl">
          Millions of companies of all sizes—from startups to Fortune 500s—use
          Stripe’s software and APIs to accept payments, send payouts, and
          manage their businesses online.
        </p>
        <button className="px-5 py-2 bg-slate-800 text-white rounded">
          Start Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
