import React from "react";

function Card({title,img, desc}) {

  return (
    <div className="">
      <div className="card" style={{ width: "18rem" }}>
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {desc}
          </p>
          <a href="#" className="btn btn-primary">
            Order Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
