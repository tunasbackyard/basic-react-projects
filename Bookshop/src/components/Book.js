import React from "react";

function Book({ imageLink, title, author }) {
  return (
    <article className="book">
      <img src={imageLink} alt="book-image" />
      <summary className="book-meta">
        <h2>{title}</h2>
        <p>{author}</p>
      </summary>
      <button className="order-btn">Order Now</button>
    </article>
  );
}

export default Book;
