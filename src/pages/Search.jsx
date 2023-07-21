import React, { useEffect } from "react";

import { useLocation } from "react-router-dom";
import { useState } from "react";
import Product from "../components/Product";
import myData from "../data.json";
const Search = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get("query");
  const searchText = searchTerm.trim();
  const [data, setData] = useState([]);

  const allDataNeeded = myData.filter(
    (p) => p.title.split(" ")[0].toLowerCase() === searchText.toLowerCase()
  );
  useEffect(() => {
    setData(allDataNeeded);
  }, [searchText]);
  return (
    <div className="mb-[30px] pt-40 lg:pt-4 lg:pt-0">
      <div className="container mx-auto">
        <div className="flex gap-x-[30px]">
          <div>
            <div className=" py-3 text-xl uppercase text-center lg:text-left ">
              {data?.length > 0
                ? `${data.length} results for "${searchTerm.toLowerCase()}"`
                : `no results found for ${searchTerm}`}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-[15px] md:gap-[30px]">
              {data?.map((product, index) => {
                return <Product product={product} key={index} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
