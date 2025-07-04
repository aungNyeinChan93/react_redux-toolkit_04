import React from "react";
import { useGetQuotesQuery } from "../services/quoteApi";

const QuotePage = () => {
  const { data, error, isLoading } = useGetQuotesQuery();

  const quotes = data && data?.quotes;

  return (
    <React.Fragment>
      <section>
        {isLoading && <>Loading . . .</>}
        {error && <>{error}</>}
        {data && Array.isArray(data?.quotes) && (
          <>
            <div className=" flex justify-center items-center">
              <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4 mx-4">
                {data &&
                  quotes.map((q) => {
                    return (
                      <div
                        className="card card-dash bg-base-100 w-96"
                        key={q.id}
                      >
                        <div className="card-body">
                          <h2 className="card-title">{q.author}</h2>
                          <p>{q.quote} </p>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </>
        )}
      </section>
    </React.Fragment>
  );
};

export default QuotePage;
