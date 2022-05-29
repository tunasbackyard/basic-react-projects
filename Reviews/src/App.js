import React from "react";

import reviews from "./data";
import Review from "./Review";

function App() {
  return (
    <main>
      <h1>Reviews</h1>
      {reviews.map((review) => {
        return <Review key={review.id} {...review} />;
      })}
    </main>
  );
}

export default App;
