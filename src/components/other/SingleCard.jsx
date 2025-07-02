import React from "react";

const SingleCard = ({ title, body }) => {
  return (
    <React.Fragment>
      <div className="card bg-base-100 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{body}</p>
        </div>
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
      </div>
    </React.Fragment>
  );
};

export default SingleCard;
