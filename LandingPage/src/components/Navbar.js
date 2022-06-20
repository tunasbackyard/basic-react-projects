import React, { useContext } from "react";
import { Context } from "../Context";
import Link from "./Link";

const Navbar = () => {
  const { links } = useContext(Context);
  return (
    <nav className="flex px-10 pt-5">
      <h2 className="font-bold text-2xl">LOGO</h2>
      <ul className="flex mx-auto">
        {links.map((sublink, index) => {
          return <Link key={index} sublink={sublink} />;
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
