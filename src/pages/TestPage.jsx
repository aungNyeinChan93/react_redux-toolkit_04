import React from "react";
import useTestReducer from "../hooks/useTestReducer";
// import cakeStore from "../tests/test_orderCake";
import useCafeShop from "../hooks/useCafeShop";

const TestPage = () => {
  const { testState, testDispatch } = useTestReducer();

  const { cafeState, cafeDispatch } = useCafeShop();

  return (
    <React.Fragment>
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-700">
        TestPage
      </h1>
      <div className="flex flex-col items-center space-y-2 mb-6">
        <span className="text-lg text-gray-700">
          {testState?.name} <span className="mx-2 text-gray-400">|</span>{" "}
          {testState?.skills}
        </span>
        <div className="flex space-x-4 mt-2">
          <button
            className="btn btn-sm bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded shadow"
            onClick={() =>
              testDispatch({ type: "TEST1", payload: "aung nyien chan" })
            }
          >
            Change Name
          </button>
          <button
            className="btn btn-sm bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow"
            onClick={() =>
              testDispatch({ type: "ADD_SKILL", payload: "skill one" })
            }
          >
            Add Skill
          </button>
        </div>
      </div>
      <section className="p-6 w-full my-8 bg-cyan-200 min-h-[200px] rounded-3xl shadow-lg">
        <h3 className="text-center text-2xl font-semibold text-red-500 underline mb-4">
          Cafe Shop
        </h3>
        <div className="flex justify-center items-center">
          <div>
            <div>
              <p className="p-2 rounded text-xl mt-4 text-red-400 text-center">
                Number of Cakes:{" "}
                <span className="font-bold text-gray-800">
                  {cafeState.cakes}
                </span>
                <span className="mx-2 text-gray-400">|</span>
                Number of Coffee:{" "}
                <span className="font-bold text-gray-800">
                  {cafeState.coffees}
                </span>
              </p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-4 mt-6">
              <button
                className="btn btn-error btn-sm bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded shadow"
                onClick={() =>
                  cafeDispatch({ type: "CAKE_ORDER", payload: 19 })
                }
              >
                Cake order
              </button>
              <button
                className="btn btn-error btn-sm bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded shadow"
                onClick={() =>
                  cafeDispatch({ type: "COFFEE_ORDER", payload: 1 })
                }
              >
                Coffee order
              </button>
              <button
                className="btn btn-success btn-sm bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded shadow"
                onClick={() =>
                  cafeDispatch({ type: "FILL_CAKE", payload: 1000 })
                }
              >
                Cake Fill
              </button>
              <button
                className="btn btn-success btn-sm bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded shadow"
                onClick={() =>
                  cafeDispatch({ type: "FILL_COFFEE", payload: 1000 })
                }
              >
                Coffee Fill
              </button>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default TestPage;
