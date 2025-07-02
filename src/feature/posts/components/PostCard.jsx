import React from "react";

const PostCard = ({ title, body }) => {
  return (
    <React.Fragment>
      <div className="card card-border bg-base-100 w-96">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{body}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Detail</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PostCard;
