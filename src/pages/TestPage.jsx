import React from "react";
import useTestReducer from "../hooks/useTestReducer";

const TestPage = () => {
  const { testState, testDispatch } = useTestReducer();
  return (
    <React.Fragment>
      <h1>TestPage</h1>
      {testState?.name} || {testState?.skills}
      <button
        className="btn btn-sm btn-error"
        onClick={() =>
          testDispatch({ type: "TEST1", payload: "aung nyien chan" })
        }
      >
        Change Name
      </button>
      <button
        className="btn btn-sm "
        onClick={() =>
          testDispatch({ type: "ADD_SKILL", payload: "skill one" })
        }
      >
        Add Skill
      </button>
    </React.Fragment>
  );
};

export default TestPage;
