import React from "react";
import { useDispatch } from "react-redux";
import { getRecipe } from "../recipeSlice";

const RecipeCard = ({ id, name, ingredients, image }) => {
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <section>
        <div className="card  bg-base-100 shadow-sm lg:h-[800px]">
          <figure>
            <img className="object-fill" src={image} alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <span className="p-2 text-xl underline text-green-400">
              {"Ingredients"}
            </span>
            <p className="text-sm">
              {ingredients &&
                ingredients?.map((i) => {
                  return (
                    <span
                      className="inline-block mx-1 px-2 py-2 bg-green-400 my-2 rounded-2xl text-center text-gray-500"
                      key={i}
                    >
                      {i}
                    </span>
                  );
                })}
            </p>
            <div className="card-actions justify-end">
              <button
                onClick={() => dispatch(getRecipe(id))}
                className="btn btn-primary"
              >
                Detail
              </button>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default RecipeCard;
