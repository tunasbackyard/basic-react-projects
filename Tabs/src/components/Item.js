import React from "react";

const Item = ({ title, dates, company, duties }) => {
  return (
    <article className="px-10">
      <div className="flex justify-between items-center my-4">
        <summary>
          <h3 className="text-xl">{title ?? "undefined"}</h3>
          <span className="text-slate-300 text-sm">{dates ?? "undefined"}</span>
        </summary>
        <span className="font-bold">{company ?? "undefined"}</span>
      </div>
      <ul className="max-w-6xl">
        {duties.map((duty, index) => (
          <li key={index}>
            <p className="my-4 px-2 bg-slate-700 border-l-2 border-slate-500">
              {duty ?? "undefined"}
            </p>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Item;
