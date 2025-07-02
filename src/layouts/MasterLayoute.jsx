import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/share/Navbar";

const MasterLayout = () => {
  return (
    <React.Fragment>
      <section className="lg:mx-[100px] p-4">
        <Navbar />
        <Outlet />
      </section>
    </React.Fragment>
  );
};

export default MasterLayout;
