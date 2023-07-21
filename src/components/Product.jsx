import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="grid w-full h-[362px] rounded-[8px] overflow-hidden relative group">
        {product.isNew ? (
          <div className=" absolute bg-accent text-primary text-[12px] font-extrabold uppercase top-4 right-4 px-2 rounded-full z-10">
            new
          </div>
        ) : (
          ""
        )}
        <div className="w-full h-[200px] flex items-center justify-center">
          <img
            className="w-[160px] h-[160px] group-hover:scale-90 transition-all"
            src={product.img}
            alt={product.title}
          />
        </div>
        <div className="px-6 pb-8 flex flex-col">
          <div className="text-sm text-accent capitalize mb-2 ">
            {product.category}
          </div>
          <div className="text-[15px] mb-4 lg:mb-">{product.title}</div>
          <div className="text-lg text-accent">${product.price}</div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
