import React from "react";

function Loader() {
  return (
    <div className="flex flex-col container justify-center items-center h-screen">
      <i className="fa-solid fa-spinner text-4xl animate-spin"></i>
      <p className="text-2xl mt-5">Loading</p>
    </div>
  );
}

export default Loader;
