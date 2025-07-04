import React from "react";
import useTestReducer from "../hooks/useTestReducer";
// import cakeStore from "../tests/test_orderCake";
import useCafeShop from "../hooks/useCafeShop";
import { useDispatch, useSelector } from "react-redux";
import {
  fillCake,
  fillCoffee,
  orderCake,
  orderCoffee,
  addTest,
} from "../feature/cafe/cafeSlice";
import Form from "../components/other/Form";
import { useGetUserQuery, useGetUsersQuery } from "../services/userApi";

const TestPage = () => {
  const { testState, testDispatch } = useTestReducer();

  const { count } = useSelector((store) => store.counter);

  const { sugar } = useSelector((store) => store.sugar);

  const {
    cakes: myCakes,
    coffee: myCoffees,
    test,
  } = useSelector((store) => store.cafe);
  const dispatch = useDispatch();

  const {
    cafeState: { coffees, cakes },
    cafeDispatch,
  } = useCafeShop();

  const { data } = useGetUsersQuery();

  const { data: userTwo } = useGetUserQuery(Number(2));

  console.log(userTwo);

  console.log(data?.users);

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-700 drop-shadow">
        TestPage
      </h1>

      {/* Test Reducer Section */}
      <section className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-6 mb-10">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-lg text-gray-700 font-medium">
            {testState?.name}
            <span className="mx-2 text-gray-400">|</span>
            {testState?.skills}
          </span>
          <div className="flex space-x-4 mt-2">
            <button
              className="btn btn-sm bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded shadow transition"
              onClick={() =>
                testDispatch({ type: "TEST1", payload: "aung nyien chan" })
              }
            >
              Change Name
            </button>
            <button
              className="btn btn-sm bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow transition"
              onClick={() =>
                testDispatch({ type: "ADD_SKILL", payload: "skill one" })
              }
            >
              Add Skill
            </button>
          </div>
        </div>
      </section>

      {/* Cafe Shop Section with useReducer */}
      <section className="max-w-2xl mx-auto bg-cyan-100 rounded-2xl shadow-lg p-8 mb-10">
        <h3 className="text-center text-2xl font-semibold text-red-500 underline mb-6">
          Cafe Shop
        </h3>
        <div className="flex flex-col items-center">
          <p className="p-2 rounded text-xl mb-4 text-red-400 text-center">
            Number of Cakes:
            <span className="font-bold text-gray-800 ml-2">{cakes}</span>
            <span className="mx-2 text-gray-400">|</span>
            Number of Coffee:
            <span className="font-bold text-gray-800 ml-2">{coffees}</span>
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            <button
              className="btn btn-error btn-sm bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded shadow transition"
              onClick={() => cafeDispatch({ type: "CAKE_ORDER", payload: 19 })}
            >
              Cake order
            </button>
            <button
              className="btn btn-error btn-sm bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded shadow transition"
              onClick={() => cafeDispatch({ type: "COFFEE_ORDER", payload: 1 })}
            >
              Coffee order
            </button>
            <button
              className="btn btn-success btn-sm bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded shadow transition"
              onClick={() => cafeDispatch({ type: "FILL_CAKE", payload: 1000 })}
            >
              Cake Fill
            </button>
            <button
              className="btn btn-success btn-sm bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded shadow transition"
              onClick={() =>
                cafeDispatch({ type: "FILL_COFFEE", payload: 1000 })
              }
            >
              Coffee Fill
            </button>
          </div>
        </div>
      </section>

      {/* Redux CafeSlice Section */}
      <p className="text-slate-800 text-center p-4">Count - {count}</p>
      <section className="max-w-lg mx-auto bg-amber-300 p-4 rounded-2xl">
        <p className="text-green-400 text-2xl text-center p-2 underline">
          Coffee Shop{" "}
        </p>
        <div className="flex justify-between items-center p-4 bg-red-400 rounded-xl shadow text-white font-semibold text-lg">
          <span>Cakes: {myCakes}</span>
          <span>Coffee: {myCoffees}</span>
          <span>Sugar: {sugar}</span>
        </div>
        <div className="flex justify-between items-center my-4">
          <button className="btn btn-sm" onClick={() => dispatch(orderCake(1))}>
            Order Cake
          </button>
          <button
            onClick={() => dispatch(orderCoffee(1))}
            className="btn btn-sm"
          >
            Order Coffee
          </button>
          <button
            className="btn btn-sm"
            onClick={() => dispatch(fillCake(100))}
          >
            Fill Cake
          </button>
          <button
            className="btn btn-sm"
            onClick={() => dispatch(fillCoffee(100))}
          >
            Fill Coffee
          </button>
        </div>
      </section>

      {/* Form */}
      <section className="p-4 my-2">
        <Form />
      </section>

      <section>
        <span className="text-slate-600">{test}</span>
        <button onClick={() => dispatch(addTest())}>Add Test</button>
      </section>

      <section className="bg-red-300 p-4">
        {data?.users &&
          data?.users?.map((user) => {
            return <li key={user.id}> {user.firstName}</li>;
          })}
      </section>
    </div>
  );
};

export default TestPage;
