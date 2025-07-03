import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDogs } from "../dogsSlice";
import DogCard from "./DogCard";
import Banner from "../../../components/share/base/Banner";
import DogCards from "./DogCards";

const DogLists = () => {
  const { dogs, isLoading, error } = useSelector((store) => store.dogs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDogs());
  }, [dispatch]);

  return (
    <React.Fragment>
      <Banner>Dog Lists</Banner>

      {isLoading && <>Loading. . . </>}

      {error && <>{error}</>}

      {dogs && (
        <>
          <DogCards dogs={dogs} />
        </>
      )}

      <section className=" flex justify-center items-center">
        <div className="grid grid-cols-4 gap-4 lg:mx-[30px]">
          {dogs &&
            Array.isArray(dogs) &&
            dogs?.map((dog, index) => <DogCard key={index} src={dog} />)}
        </div>
      </section>
    </React.Fragment>
  );
};

export default DogLists;
