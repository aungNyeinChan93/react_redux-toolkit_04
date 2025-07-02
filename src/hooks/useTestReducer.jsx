import { useReducer } from "react";

const useTestReducer = () => {
  const reducer = (state, action) => {
    if (action.type === "TEST1") {
      return { ...state, name: action.payload };
    }
    return state;
  };
  const initialValue = {
    name: "aung",
  };
  const [testState, testDispatch] = useReducer(reducer, initialValue);

  return { testState, testDispatch };
};

export default useTestReducer;
