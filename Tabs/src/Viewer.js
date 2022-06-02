import React, { useState } from "react";

const Viewer = ({ data }) => {
  const [current, setCurrent] = useState(data[2]);

  return (
    <section className="wrapper">
      <div className="tabs">
        <span
          className="tab"
          onClick={() => {
            setCurrent(data[2]);
          }}
        >
          {data[2]?.company ?? "undefined"}
        </span>
        <span
          className="tab"
          onClick={() => {
            setCurrent(data[1]);
          }}
        >
          {data[1]?.company ?? "undefined"}
        </span>
        <span
          className="tab"
          onClick={() => {
            setCurrent(data[0]);
          }}
        >
          {data[0]?.company ?? "undefined"}
        </span>
      </div>
      <div className="item">
        <div>
          <h3 className="item__title">{current?.title ?? "undefined"}</h3>
          <span className="item__date">{current?.dates ?? "undefined"}</span>
        </div>
        <span className="item__company">{current?.company ?? "undefined"}</span>
        <ul className="item__list">
          <li>
            <p className="item__text">{current?.duties[0] ?? "undefined"}</p>
          </li>
          <li>
            <p className="item__text">{current?.duties[1] ?? "undefined"}</p>
          </li>
          <li>
            <p className="item__text">{current?.duties[2] ?? "undefined"}</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Viewer;
