import React, { useState } from "react";

const Viewer = ({ data }) => {
  const [current, setCurrent] = useState(data[2]);

  return (
    <section className="wrapper">
      <div className="tabs">
        <span className="tab">{data[2].company}</span>
        <span className="tab">{data[1].company}</span>
        <span className="tab">{data[0].company}</span>
      </div>
      <div className="item">
        <div>
          <h3 className="item__title">{current.title}</h3>
          <span className="item__date">{current.dates}</span>
        </div>
        <span className="item__company">{current.company}</span>
        <ul className="item__list">
          <li>
            <p className="item__text">{current.duties[0]}</p>
          </li>
          <li>
            <p className="item__text">{current.duties[1]}</p>
          </li>
          <li>
            <p className="item__text">{current.duties[2]}</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Viewer;
