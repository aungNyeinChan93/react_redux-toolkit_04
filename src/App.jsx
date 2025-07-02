import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./feature/counter/counterSlice";
import { changeName, changeEmail, addSkill } from "./feature/user/userSlice";
import { addProduct, dropProduct } from "./feature/product/productSlice";
import { fetchPosts } from "./feature/posts/postsSlice";
import SingleCard from "./components/other/SingleCard";

const App = () => {
  const { count } = useSelector((store) => store.counter);
  const { name, email, skill } = useSelector((store) => store.user);
  const productStore = useSelector((store) => store.product);
  const { posts, status, error } = useSelector((store) => store.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addSkill(["a", "adsf", "adsfas"]));
    if (status === "idle") {
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);

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
              <li key={p.id}>
                {p.title}
                <button onClick={() => dispatch(dropProduct(p.title))}>
                  del
                </button>
              </li>
            );
          })}
        </ul>
        <button
          type="button"
          onClick={() => dispatch(addProduct({ title: "test_1" }))}
        >
          Add Products
        </button>

        <section
          data-theme="forest"
          className="flex justify-center items-center lg:w-[1500px] mx-auto p-4"
        >
          <div className="grid grid-cols-3 gap-4  p-5" data-theme="dark">
            {posts &&
              status === "success" &&
              posts?.map((post) => {
                return <SingleCard {...post} />;
              })}
          </div>
        </section>
      </section>
    </React.Fragment>
  );
};

export default App;
