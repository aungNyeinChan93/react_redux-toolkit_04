import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes } from "../recipeSlice";
import RecipeCard from "./RecipeCard";

const RecipeList = () => {
  const { recipes, isLoading, error } = useSelector((store) => store.recipes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecipes());
  }, []);

  console.log(recipes);

  return (
    <React.Fragment>
      <section>
        {isLoading && <>Loading . . .</>}
        {error && <>{error}</>}
        {recipes && Array.isArray(recipes) && (
          <>
            <div className="flex justify-center items-center p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {recipes &&
                  recipes?.map((recipe) => {
                    return <RecipeCard key={recipe.id} {...recipe} />;
                  })}
              </div>
            </div>
          </>
        )}
      </section>
    </React.Fragment>
  );
};

export default RecipeList;
