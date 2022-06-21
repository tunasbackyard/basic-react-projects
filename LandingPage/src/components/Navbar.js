import React, { useContext } from "react";
import { useGlobalContext } from "../Context";
import Link from "./Link";

const Navbar = () => {
  const { sublinks, closeSubmenu } = useGlobalContext();
  return (
    <nav
      className="container flex justify-center items-center px-16 pt-5 text-2xl bg-transparent text-gray-800"
      onMouseOver={(e) => {
        if (e.target.nodeName !== "LI") closeSubmenu();
      }}
    >
      <h3 className="font-bold text-3xl">Stripe</h3>
      <ul className="flex mx-auto justify-between">
        {sublinks.map((sublink, index) => {
          const { page } = sublink;
          return <Link key={index} text={page} index={index} />;
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
