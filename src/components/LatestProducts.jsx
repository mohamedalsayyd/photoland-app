import React, { useEffect } from "react";
import ProductSlider from "./ProductSlider";
import myData from "../data.json";

import { useState } from "react";
const LatestProducts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(myData);
  }, []);
  return (
    <div className="mb-16">
      <div className=" container mx-auto">
        <h2 className=" h2 mb-6 text-center xl:text-left">Products</h2>
      </div>
      <ProductSlider data={data} />
    </div>
  );
};

export default LatestProducts;
