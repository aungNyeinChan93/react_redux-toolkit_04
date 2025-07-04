import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos } from "../photoSlice";
import PhotoCard from "./PhotoCard";

const PhotoLists = () => {
  const { photos, isLoading, error } = useSelector((store) => store.photos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);

  return (
    <React.Fragment>
      <section>
        {isLoading && <>Loading . . .</>}
        {error && <>{error}</>}
        {photos && Array.isArray(photos) && (
          <>
            <div className="flex justify-center items-center">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {photos &&
                  photos?.map((photo, index) => {
                    return <PhotoCard key={index} {...photo} />;
                  })}
              </div>
            </div>
          </>
        )}
      </section>
    </React.Fragment>
  );
};

export default PhotoLists;
