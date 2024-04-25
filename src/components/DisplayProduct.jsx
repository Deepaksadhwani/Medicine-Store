import React, { useEffect, useState } from "react";
import { ProductContext } from "../contexts/PorductContextProvider";
import { useContext } from "react";
import ProductCard from "./ProductCard";

const DisplayProduct = () => {
  const [useData,setUserData] = useState(null);

  useEffect(()=> {
    user
  }, [])
  const {
    productName,
    productDescription,
    productPrice,
    quantitySizeS,
    quantitySizeM,
    quantitySizeL,
  } = useContext(ProductContext);

  return <div>
    
  </div>;
};

export default DisplayProduct;
