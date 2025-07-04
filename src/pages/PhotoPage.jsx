import React from "react";
import PhotoLists from "../feature/photo/components/PhotoLists";

const PhotoPage = () => {
  return (
    <React.Fragment>
      <section className="w-full min-h-screen">
        <PhotoLists />
      </section>
    </React.Fragment>
  );
};

export default PhotoPage;
