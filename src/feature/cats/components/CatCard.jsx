import React from "react";

const CatCard = ({ url }) => {
  return (
    <React.Fragment>
      <div className="flex items-center justify-center p-2 rounded-2xl my-2  bg-black">
        <div className="relative w-70 h-96 max-w-lg mx-auto bg-gray-900 backdrop-blur-2xl overflow-hidden rounded-lg shadow-xl">
          <img
            className="absolute inset-0 w-full h-full brightness-75"
            src={url}
          />
          <div className="relative w-full h-full px-10 py-8 backdrop-blur-2xl">
            <img className="w-64 h-64 mx-auto rounded-lg" src={url} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CatCard;
