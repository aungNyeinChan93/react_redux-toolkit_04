import React, { Children } from "react";

const Banner = ({ children }) => {
  return (
    <React.Fragment>
      <section class="bg-gray-800  rounded-lg p-4 my-2 ">
        <h1 class="text-4xl text-center text-slate-400 uppercase font-bold">
          {children}
        </h1>
        {/* <p class="mt-4 text-sm text-slate-600 leading-relaxed">{children}</p> */}
        {/* 
        <button
          type="button"
          class="px-5 py-3 mt-8 rounded-lg text-white text-sm font-medium tracking-wider border-none outline-none bg-blue-600 hover:bg-blue-700 cursor-pointer"
        >
          Learn more
        </button> */}
      </section>
    </React.Fragment>
  );
};

export default Banner;
