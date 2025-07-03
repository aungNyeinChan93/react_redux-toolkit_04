import React from "react";
import GitHubUserLists from "../feature/githubUsers/components/GitHubUserLists";

const GitHubUserPage = () => {
  return (
    <React.Fragment>
      <section className="w-full min-h-screen bg-green-500 p-2">
        <GitHubUserLists />
      </section>
    </React.Fragment>
  );
};

export default GitHubUserPage;
