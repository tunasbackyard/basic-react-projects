import React from "react";

const Media = ({ display, mediaLinks }) => {
  if (display === false) return;
  return (
    <div className="media container">
      <ul className="media__list">
        {mediaLinks.map((link) => (
          <li className="media__list_item" key={link.id}>
            <a className="media__list__item__link" href={link.url}>
              <i className={link.icon}></i>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Media;
