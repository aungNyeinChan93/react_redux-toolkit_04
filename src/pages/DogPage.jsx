import React from "react";
import DogLists from "../feature/dogs/components/DogLists";

const DogPage = () => {
  return (
    <React.Fragment>
      <section className=" min-h-screen ">
        <DogLists />
      </section>
    </React.Fragment>
  );
};

export default DogPage;
