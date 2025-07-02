import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCats } from "../catsSlice";
import CatCard from "./CatCard";
import Banner from "../../../components/share/base/Banner";

const CatLists = () => {
  const { cats, isLoading, error } = useSelector((store) => store.cats);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCats());
  }, [dispatch]);

  if (isLoading) {
    return <> Loading . . </>;
  }

  if (error) {
    return <>{error}</>;
  }

  return (
    <React.Fragment>
      <section>
        <Banner> Cat Lists 😺</Banner>
        <div className="flex justify-center items-center ">
          <div className="grid grid-cols-4 gap-4 ">
            {cats && Array.isArray(cats) && !isLoading && !error && (
              <>
                {cats?.map((cat) => {
                  return <CatCard key={cat.id} {...cat} />;
                })}
              </>
            )}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default CatLists;
