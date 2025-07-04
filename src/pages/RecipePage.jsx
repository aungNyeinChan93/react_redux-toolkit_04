import React from "react";
import RecipeList from "../feature/recipe/components/RecipeLists";

const RecipePage = () => {
  return (
    <React.Fragment>
      <section className="w-full min-h-screen">
        <RecipeList />
      </section>
    </React.Fragment>
  );
};

export default RecipePage;
