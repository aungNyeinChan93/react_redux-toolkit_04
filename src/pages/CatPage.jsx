import React from "react";
import CatLists from "../feature/cats/components/CatLists";

const CatPage = () => {
  return (
    <React.Fragment>
      <section className="w-full min-h-screen">
        <CatLists />
      </section>
    </React.Fragment>
  );
};

export default CatPage;
