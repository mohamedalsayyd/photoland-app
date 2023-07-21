import React, { useContext, useState } from "react";
import CategoryNav from "./../components/CategoryNav";
import Product from "../components/Product";
import { ProductsContext } from "../context/ProductsContext";

const Products = () => {
  const { data } = useContext(ProductsContext);
  const [title, setTitle] = useState("All");

  return (
    <div className="mb-16 pt-40 lg:pt-0">
      <div className="container mx-auto">
        <div className="flex gap-x-[30px]">
          <CategoryNav setTitle={setTitle} />
          <main>
            <div className="py-3 text-xl uppercase text-center lg:text-left">
              {title} Cameras
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-[15px] md:gap-[30px]">
              <CategoryNav setTitle={setTitle} />
              <main>
                <div className="py-3 text-xl uppercase text-center lg:text-left">
                  {title} Cameras
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-[15px] md:gap-[30px]">
                  {data.map((product) => {
                    return <Product product={product} key={product.id} />;
                  })}
                </div>
              </main>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Products;
