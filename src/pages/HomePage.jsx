import React from "react";
import Carousel from "../components/share/base/Carousel";

const HomePage = () => {
  return (
    <React.Fragment>
      <section className="min-h-screen w-full ">
        <div className="lg:mt-[80px]">
          <Carousel />
        </div>
      </section>
    </React.Fragment>
  );
};

export default HomePage;
