import React, { useState } from "react";

const Tour = ({ id, image, info, price, name, remove }) => {
  const [read, setread] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} />

      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <div className="tour-price">${price}</div>
        </div>
        <p>
          {read ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setread(!read)}>
            {read ? "show less" : "Read More"}
          </button>
        </p>

        <button className="delete-btn" onClick={() => remove(id)}>
          Not Interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
