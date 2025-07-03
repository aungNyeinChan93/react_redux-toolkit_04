import React from "react";

const DogCard = ({ src }) => {
  return (
    <React.Fragment>
      {src && (
        <>
          <div className="bg-white shadow-sm border border-gray-200 p-2 w-full max-w-sm rounded-lg overflow-hidden mx-auto mt-4">
            <div className="aspect-[3/2]">
              <img
                src={src}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </>
      )}
    </React.Fragment>
  );
};

export default DogCard;
