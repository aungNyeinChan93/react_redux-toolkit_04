import React from "react";
import { NavLink } from "react-router";
import Logo from "../../assets/redux-logo.png";

const Navbar = () => {
  return (
    <React.Fragment>
      <header>
        <div className="flex justify-between items-center bg-slate-900 py-3 px-4 rounded-sm">
          <button className="btn btn-ghost text-xl">
            <img src={Logo} alt="" className="w-10 rounded-4xl object-fit" />
          </button>
          <div className="flex justify-around lg:space-x-[50px] items-center me-10 ">
            <span>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive ? " text-green-400" : "text-slate-300"
                }
              >
                Home
              </NavLink>
            </span>
            <span>
              <NavLink
                to={"/posts"}
                className={({ isActive }) =>
                  isActive ? " text-green-400" : "text-slate-300"
                }
              >
                Posts
              </NavLink>
            </span>

            <span>
              <NavLink
                to={"/cats"}
                className={({ isActive }) =>
                  isActive ? " text-green-400" : "text-slate-300"
                }
              >
                Cats
              </NavLink>
            </span>

            <span>
              <NavLink
                to={"/dogs"}
                className={({ isActive }) =>
                  isActive ? " text-green-400" : "text-slate-300"
                }
              >
                Dogs
              </NavLink>
            </span>

            <span>
              <NavLink
                to={"/users"}
                className={({ isActive }) =>
                  isActive ? " text-green-400" : "text-slate-300"
                }
              >
                Users
              </NavLink>
            </span>

            <span>
              <NavLink
                to={"/photos"}
                className={({ isActive }) =>
                  isActive ? " text-green-400" : "text-slate-300"
                }
              >
                Photos
              </NavLink>
            </span>

            <span>
              <NavLink
                to={"/recipes"}
                className={({ isActive }) =>
                  isActive ? " text-green-400" : "text-slate-300"
                }
              >
                Recipes
              </NavLink>
            </span>

            <span>
              <NavLink
                to={"/tests"}
                className={({ isActive }) =>
                  isActive ? " text-green-400" : "text-slate-300"
                }
              >
                Tests
              </NavLink>
            </span>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Navbar;
