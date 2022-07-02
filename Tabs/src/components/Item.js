import React from "react";

const Item = ({ title, dates, company, duties }) => {
  return (
    <article className="item">
      <summary>
        <h3 className="item__title">{title ?? "undefined"}</h3>
        <span className="item__date">{dates ?? "undefined"}</span>
      </summary>
      <span className="item__company">{company ?? "undefined"}</span>
      <ul className="item__list">
        {duties.map((duty, index) => (
          <li key={index}>
            <p className="item__text">{duty ?? "undefined"}</p>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Item;
