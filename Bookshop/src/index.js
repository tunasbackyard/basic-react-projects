import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const bookData = [
  {
    id: 1,
    imageLink:
      "https://m.media-amazon.com/images/I/71OFqSRFDgL._AC_UY327_FMwebp_QL65_.jpg",
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
  },
  {
    id: 2,
    imageLink:
      "https://m.media-amazon.com/images/I/A1fE+AMrKPL._AC_UY327_FMwebp_QL65_.jpg",
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
  },
  {
    id: 3,
    imageLink:
      "https://m.media-amazon.com/images/I/71Ow6MUOx2L._AC_UL480_FMwebp_QL65_.jpg",
    title: "The Art of War",
    author: "Sun Tzu",
  },
  {
    id: 4,
    imageLink:
      "https://m.media-amazon.com/images/I/71im7JsF7EL._AC_UY327_FMwebp_QL65_.jpg",
    title: "The Metamorphosis",
    author: "Franz Kafka",
  },
];

function BookList() {
  return (
    <section className="wrapper">
      <h1 className="title">Books 📚</h1>
      <ul className="booklist">
        {bookData.map((book) => {
          return <Book key={book.id} {...book}></Book>;
        })}
      </ul>
    </section>
  );
}

function Book({ imageLink, title, author }) {
  return (
    <article className="book">
      <img src={imageLink} alt="book-image" />
      <div className="book-meta">
        <h2>{title}</h2>
        <p>{author}</p>
      </div>
      <button className="order-btn">Order Now</button>
    </article>
  );
}

ReactDOM.render(<BookList />, document.getElementById("root"));
