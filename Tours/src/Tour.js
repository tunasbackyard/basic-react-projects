import React, { useState } from "react";

function Tour({ id, name, info, image, price }) {
  const [text, setText] = useState(info.substring(0, 200));
  const [btnText, setBtnText] = useState("Read More");
  const [isClicked, setIsClicked] = useState(true);

  function handleDisplay() {
    if (isClicked) {
      setText(info);
      setBtnText("Show Less");
      setIsClicked(false);
    } else {
      setIsClicked(true);
      setText(info.substring(0, 200));
      setBtnText("Read More");
    }
  }
  return (
    <article className="tour">
      <img className="tour__img" src={image} alt={name} />
      <div>
        <h1 className="tour__title">{name}</h1>
        <h4 className="tour__price">${price}</h4>
      </div>
      <p className="tour__info">
        {text}
        <button className="more__btn" onClick={handleDisplay}>
          {btnText}
        </button>
      </p>
      <button className="tour__btn">Not interesting</button>
    </article>
  );
}

export default Tour;
