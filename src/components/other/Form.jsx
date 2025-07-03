import React, { useState } from "react";

const Form = () => {
  const [login, setLoign] = useState({
    email: "",
    password: "",
  });

  const LoginSubmit = (e) => {
    e.preventDefault();
    console.log({ email: login.email, password: login.password });
  };

  return (
    <React.Fragment>
      <form className="space-y-6 max-w-lg mx-auto" onSubmit={LoginSubmit}>
        <div className="relative flex items-center">
          <input
            type="email"
            placeholder="Enter Email"
            className="px-2 py-3 pr-8 bg-white text-slate-900 w-full text-sm border-b-2 border-gray-200 focus:border-blue-500 outline-none"
            name="email"
            value={login.email}
            onChange={(e) =>
              setLoign((pre) => ({ ...pre, [e.target.name]: e.target.value }))
            }
          />
        </div>

        <div className="relative flex items-center">
          <input
            type="password"
            placeholder="Enter Password"
            className="px-2 py-3 pr-8 bg-white text-slate-900 w-full text-sm border-b-2 border-gray-200 focus:border-blue-500 outline-none"
            name="password"
            value={login.password}
            onChange={
              (e) => setLoign((pre) => ({ ...pre, password: e.target.value }))
              //   setLoign((pre) => ({
              //     ...pre,
              //     [Object.keys(login)[1]]: e.target.value,
              //   }))
            }
          />
        </div>

        <button
          type="submit"
          className="px-5 py-2.5 bg-blue-500 text-sm font-medium text-white hover:bg-blue-600 rounded-sm cursor-pointer"
        >
          Submit
        </button>
      </form>
    </React.Fragment>
  );
};

export default Form;
