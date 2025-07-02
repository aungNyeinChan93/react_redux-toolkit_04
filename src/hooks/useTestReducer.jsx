import { useReducer } from "react";

const useTestReducer = () => {
  const reducer = (state, action) => {
    if (action.type === "TEST1") {
      return { ...state, name: action.payload };
    }
    if (action.type == "ADD_SKILL") {
      return { ...state, skills: [...state.skills, action.payload] };
    }
    return state;
  };
  const initialValue = {
    name: "aung",
    skills: [],
  };
  const [testState, testDispatch] = useReducer(reducer, initialValue);

  return { testState, testDispatch };
};

export default useTestReducer;

// that way is doesn't need redux??
