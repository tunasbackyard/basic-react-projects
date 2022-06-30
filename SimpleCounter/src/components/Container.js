import React from "react";
import { useGlobalContext } from "../context";
import Button from "./Button";

const Container = () => {
  const { increase, decrease, reset } = useGlobalContext();
  return (
    <div className="btn-container">
      <Button handler={increase} text={"increase"} />
      <Button handler={decrease} text={"decrease"} />
      <Button handler={reset} text={"reset"} />
    </div>
  );
};

export default Container;
