import React, { useState } from "react";
import Controller from "./Controller";

import reviews from "./data";
import Review from "./Review";

function App() {
  const [review, setReview] = useState(reviews[0]);
  const [arrayIx, setArrayIx] = useState(0);

  function showNext() {
    const index = arrayIx + 1 < reviews.length ? arrayIx + 1 : 0;
    setReview(reviews[index]);
    setArrayIx(index);
  }

  function showPrev() {
    const index = arrayIx - 1 >= 0 ? arrayIx - 1 : reviews.length - 1;
    setReview(reviews[index]);
    setArrayIx(index);
  }

  function showRandomReview() {
    const randomIx = Math.trunc(Math.random() * reviews.length);
    setReview(reviews[randomIx]);
    setArrayIx(randomIx);
  }

  return (
    <main>
      <h1>Reviews</h1>
      <section className="wrapper">
        <Review key={review.id} {...review} />
        <Controller
          showPrev={showPrev}
          showNext={showNext}
          showRandomReview={showRandomReview}
        />
      </section>
    </main>
  );
}

export default App;
