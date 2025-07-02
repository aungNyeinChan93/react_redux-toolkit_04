import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../postsSlice";
import PostCard from "./PostCard";

const PostLists = () => {
  const { posts, status, error } = useSelector((store) => store.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);

  return (
    <React.Fragment>
      <section>
        {error && <>{error}</>}
        {status === "pending" && <>Loading ... </>}
        <div className=" grid grid-cols-3 gap-3 p-2">
          {posts &&
            Array.isArray(posts) &&
            posts.length !== 0 &&
            posts?.map((post) => {
              return <PostCard key={post.id} {...post} />;
            })}
        </div>
      </section>
    </React.Fragment>
  );
};

export default PostLists;
