import React, { useState } from "react";

function Tour({ name, info, image, price }) {
  const [text, setText] = useState(info.substring(0, 200));
  const [btnText, setBtnText] = useState("Read More");
  const [isClicked, setIsClicked] = useState(true);
  const [isTourVisible, setIsTourVisible] = useState(true);

  function handleTextLength() {
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

  function hideTour() {
    setIsTourVisible(false);
  }
  if (isTourVisible) {
    return (
      <article className="tour">
        <img className="tour__img" src={image} alt={name} />
        <div>
          <h1 className="tour__title">{name}</h1>
          <h4 className="tour__price">${price}</h4>
        </div>
        <p className="tour__info">
          {text}
          <button className="more__btn" onClick={handleTextLength}>
            {btnText}
          </button>
        </p>
        <button className="tour__btn" onClick={hideTour}>
          Not interesting
        </button>
      </article>
    );
  } else {
    return <></>;
  }
}

export default Tour;
