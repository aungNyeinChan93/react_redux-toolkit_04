import React from "react";
import PostLists from "../feature/posts/components/PostLists";
import Banner from "../components/share/base/Banner";

const PostPage = () => {
  return (
    <React.Fragment>
      <section>
        <Banner>Post List 📫</Banner>
        <PostLists />
      </section>
    </React.Fragment>
  );
};

export default PostPage;
