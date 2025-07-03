import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GitHubUser from "./GitHubUser";
import { fetchUsers } from "../usersSlice";

const GitHubUserLists = () => {
  const { users, isLoading, error } = useSelector((store) => store.users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  //   const dispath = useDispatch();
  return (
    <React.Fragment>
      {isLoading && <>Loading . . . </>}
      {error && <>{error}</>}
      <section>
        {users && Array.isArray(users) && (
          <>
            <div className="flex justify-center items-center">
              <div className="grid grid-cols-3 gap-4 my-4">
                {users &&
                  users?.map((user) => <GitHubUser key={user.id} {...user} />)}
              </div>
            </div>
          </>
        )}
      </section>
    </React.Fragment>
  );
};

export default GitHubUserLists;
