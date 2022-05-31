import React from "react";
import Book from "./Book";
import data from "./data";

const App = () => {
  return (
    <section className="wrapper">
      <h1 className="title">Books 📚</h1>
      <ul className="booklist">
        {data.map((book) => {
          return <Book key={book.id} {...book}></Book>;
        })}
      </ul>
    </section>
  );
};

export default App;
