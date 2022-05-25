import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { bookData } from "./bookData";
import Book from "./Book";

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

ReactDOM.render(<BookList />, document.getElementById("root"));
