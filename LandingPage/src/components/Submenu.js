import React from "react";
import { useGlobalContext } from "../Context";

const Submenu = ({ links }) => {
  const { isSubmenuOpen, closeSubmenu } = useGlobalContext();

  return (
    <>
      {isSubmenuOpen && (
        <section
          className="bg-white mx-auto w-fit px-28 py-8 rounded-md shadow-xl"
          onMouseLeave={() => {
            closeSubmenu();
          }}
        >
          <ul className="flex">
            {links.map(({ label, icon }, index) => {
              return (
                <li
                  key={index}
                  className="flex justify-center items-center px-3 py-1 mx-10 bg-slate-200 rounded-lg shadow"
                >
                  {icon}
                  <h5 className="mx-2 capitalize">{label}</h5>
                </li>
              );
            })}
          </ul>
        </section>
      )}
    </>
  );
};

export default Submenu;
