import React from "react";

const Link = ({ sublink }) => {
  const { page, links } = sublink;
  return <li className="mx-10 text-xl cursor-pointer capitalize">{page}</li>;
};

export default Link;
