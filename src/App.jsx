import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./feature/counter/counterSlice";
import { changeName, changeEmail, addSkill } from "./feature/user/userSlice";
import { addProduct, dropProduct } from "./feature/product/productSlice";

const App = () => {
  const { count } = useSelector((store) => store.counter);
  const { name, email, skill } = useSelector((store) => store.user);
  const productStore = useSelector((store) => store.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addSkill(["a", "adsf", "adsfas"]));
  }, []);

  const [myname, setMyname] = useState("");

  const change = () => {
    dispatch(changeName(myname));
    // alert(`change!`);
  };

  console.log(productStore.products);

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
          value={email}
          onChange={(e) => dispatch(changeEmail(e.target.value))}
        />
        <button type="button" onClick={change}>
          Change name
        </button>

        {skill &&
          skill?.map((s, index) => {
            return <li key={index}>{s}</li>;
          })}

        <ul>
          {productStore?.products?.map((p) => {
            return (
              <li key={p.name}>
                {p.name}
                <button onClick={() => dispatch(dropProduct(p.name))}>
                  del
                </button>
              </li>
            );
          })}
        </ul>
        <button
          type="button"
          onClick={() => dispatch(addProduct({ name: "test_1" }))}
        >
          Add Products
        </button>
      </section>
    </React.Fragment>
  );
};

export default App;
