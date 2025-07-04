import React from "react";

const PhotoCard = ({ id, title, image, rating: { rate, count } }) => {
  return (
    <React.Fragment>
      <a href={`${id}`} className="group block overflow-hidden">
        <div className="relative lg:max-h-[300px] sm:h-[450px]">
          <img
            src={image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
          />

          <img
            src={image}
            alt=""
            className="absolute inset-0 h-full w-full object-center opacity-0 group-hover:opacity-100 *:"
          />
        </div>

        <div className="relative bg-white pt-3">
          <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
            {title}
          </h3>

          <div className="mt-1.5 flex items-center justify-between text-gray-900">
            <p className="tracking-wide">{rate}</p>

            <p className="text-xs tracking-wide uppercase">{count}</p>
          </div>
        </div>
      </a>
    </React.Fragment>
  );
};

export default PhotoCard;
