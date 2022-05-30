import React from "react";
import Container from "./Container";
import questions from "./data";

const Viewer = () => {
  return (
    <section className="wrapper">
      {questions.map((question) => {
        return <Container key={question.id} {...question} />;
      })}
    </section>
  );
};

export default Viewer;
