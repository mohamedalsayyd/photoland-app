import React, { createContext, useEffect, useState } from "react";
import myData from "../data.json";
export const ProductsContext = createContext();
const ProductsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setData(myData);
    setIsLoading(false);
  }, []);
  return (
    <ProductsContext.Provider value={{ data, isLoading }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
