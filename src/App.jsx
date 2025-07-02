import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./feature/counter/counterSlice";
import { changeName, changeEmail } from "./feature/user/userSlice";

const App = () => {
  const { count } = useSelector((store) => store.counter);
  const { name, email, skill } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const [myname, setMyname] = useState("");
  const [myEmail, setEmail] = useState("");

  const change = () => {
    dispatch(changeEmail(myEmail));
    dispatch(changeName(myname));
    alert(`change!`);
  };
  return (
    <React.Fragment>
      <section>
        <h1>{count}</h1>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>

        <p>
          My name is {name} || Emial - {email}
        </p>
        <input
          placeholder="name "
          type="text"
          value={myname}
          onChange={(e) => setMyname(e.target.value)}
        />
        <input
          placeholder="email "
          type="text"
          value={myEmail}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="button" onClick={change}>
          Change name
        </button>

        {skill &&
          skill?.map((s) => {
            return <li key={s}>{s}</li>;
          })}
      </section>
    </React.Fragment>
  );
};

export default App;
