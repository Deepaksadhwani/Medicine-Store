import React, { useEffect, useState } from "react";
import { ProductContext } from "../contexts/PorductContextProvider";
import { useContext } from "react";
import ProductCard from "./ProductCard";

const DisplayProduct = () => {
  const { userData, setUserData } = useContext(ProductContext);
  console.log(userData);

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {userData.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            description={product.Description}
            price={product.price}
            L={product.SizeL || ""}
            M={product.SizeM || ""}
            S={product.SizeS || ""}
          />
        ))}
      </div>
    </div>
  );
};

export default DisplayProduct;