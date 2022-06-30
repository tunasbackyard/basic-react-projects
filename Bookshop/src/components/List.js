import React from "react";
import { useGlobalContext } from "../context";
import Book from "./Book";

const List = () => {
  const { data } = useGlobalContext();
  return (
    <ul className="flex w-full justify-center">
      {data.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </ul>
  );
};

export default List;
