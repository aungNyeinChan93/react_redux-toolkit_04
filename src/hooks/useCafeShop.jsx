import React, { useReducer } from "react";

const useCafeShop = () => {
  const initialState = {
    cakes: 100,
    coffees: 100,
  };

  const cafeReducer = (state, action) => {
    if (action.type === "CAKE_ORDER") {
      return { ...state, cakes: state.cakes - action.payload };
    }
    if (action.type === "COFFEE_ORDER") {
      return { ...state, coffees: state.coffees - action.payload };
    }
    if (action.type === "FILL_CAKE") {
      return { ...state, cakes: state.cakes + action.payload };
    }
    if (action.type === "FILL_COFFEE") {
      return { ...state, coffees: state.coffees + action.payload };
    }
    return state;
  };

  const [cafeState, cafeDispatch] = useReducer(cafeReducer, initialState);

  return { cafeState, cafeDispatch };
};

export default useCafeShop;
