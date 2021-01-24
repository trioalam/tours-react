import React from "react";
import Tour from "./Tour";
const Tours = ({ tour , remove }) => {
  return (
    <>
      <section>
        <div className="title">
          <h2>Our Tours...</h2>
          <div className="underline"></div>
        </div>
        <div>
          {tour.map((value) => {
            return <Tour key={value.id} {...value} remove={remove}></Tour>;
          })}
        </div>
      </section>
    </>
  );
};

export default Tours;
