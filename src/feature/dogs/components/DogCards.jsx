import React from "react";

const DogCards = ({ dogs }) => {
  const [one, two, three, four, five, six, seven, eight] = dogs;
  //   const specialDogs = dogs?.slice(0, 7);
  //   console.log(specialDogs);
  return (
    <React.Fragment>
      {dogs && (
        <>
          <section className="py-4 px-2">
            <div className="flex justify-between items-center">
              <img
                className="size-60 object-center ms-2 rounded-2xl border border-b-[8px] border-b-green-400 hover:border-b-red-600"
                src={one}
                alt=""
              />
              <img
                className="size-60 object-center ms-2 rounded-2xl border border-b-[8px] border-b-green-400 hover:border-b-red-600"
                src={two}
                alt=""
              />
              <img
                className="size-60 object-center ms-2 rounded-2xl border border-b-[8px] border-b-green-400 hover:border-b-red-600"
                src={three}
                alt=""
              />
            </div>
            <div className="flex justify-around mt-6 items-center">
              <img
                className="size-60 object-center ms-2 rounded-2xl border border-b-[8px] border-b-green-400 hover:border-b-red-600"
                src={four}
                alt=""
              />
              <img
                className="size-60 object-center ms-2 rounded-2xl border border-b-[8px] border-b-green-400 hover:border-b-red-600"
                src={five}
                alt=""
              />
            </div>
            <div className="flex justify-between items-center mt-4">
              <img
                className="size-60 object-center ms-2 rounded-2xl border border-b-[8px] border-b-green-400 hover:border-b-red-600"
                src={six}
                alt=""
              />
              <img
                className="size-60 object-center ms-2 rounded-2xl border border-b-[8px] border-b-green-400 hover:border-b-red-600"
                src={seven}
                alt=""
              />
              <img
                className="size-60 object-center ms-2 rounded-2xl border border-b-[8px] border-b-green-400 hover:border-b-red-600"
                src={eight}
                alt=""
              />
            </div>
          </section>
        </>
      )}
    </React.Fragment>
  );
};

export default DogCards;
