import React, { useRef } from "react";

const Media = ({ socialLinks, displayValue }) => {
  const linksContainer = useRef(null);
  if (displayValue) linksContainer.current?.classList.add("container--hidden");
  else linksContainer.current?.classList.remove("container--hidden");

  return (
    <div className="links container" ref={linksContainer}>
      <ul className="links__list">
        {socialLinks.map((link) => (
          <li className="links__list__item" key={link.id}>
            <a
              className="links__list__item__link"
              href={link.url}
              target="_blank"
            >
              <i className={link.icon}></i>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Media;
