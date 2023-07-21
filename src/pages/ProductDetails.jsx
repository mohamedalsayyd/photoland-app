import React, { useContext, useEffect } from "react";
import { useState } from "react";
import RelatedProducts from "./../components/RelatedProducts";
import { CartContext } from "./../context/CartContext";
import { useParams } from "react-router-dom";
import { ProductsContext } from "./../context/ProductsContext";

const ProductDetails = () => {
  const { data, isLoading } = useContext(ProductsContext);
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    if (!isLoading) {
      setProduct(data.find((p) => p.id === parseInt(id)));
    }
  }, [data, id, isLoading]);
  return (
    <div className="mb-16 pt-44 lg:pt-[-30px] xl:pt-0">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-[30px] mb-[30px]">
          <div className="flex-1 lg:max-w-[40%] lg:h-[540px] grad rounded-lg flex justify-center items-center">
            <img
              src={product.img}
              alt={product.title}
              className="w-full max-w-[65%]"
            />
          </div>
          <div className="flex-1 bg-primary p-12 xl:p-20 rounded-lg flex flex-col justify-center">
            <div className="uppercase text-accent text-lg font-medium mb-2"></div>
            <h2 className="h2 mb-4">{product.title}</h2>
            <p className="mb-12">{product.description}</p>
            <div className="flex items-center gap-x-8">
              <div className="text-3xl text-accent font-semibold">
                ${product.price}
              </div>
              <button
                onClick={() => addToCart(product)}
                className="btn btn-accent"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <RelatedProducts />
      </div>
    </div>
  );
};

export default ProductDetails;
