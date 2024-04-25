import { createContext, useState } from "react";

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [productName, setProductName] = useState(null);
  const [productDescription, setProductDescription] = useState(null);
  const [productPrice, setProductPrice] = useState(null);
  const [quantitySizeS, setQuantitySizeS] = useState(null);
  const [quantitySizeM, setQuantitySizeM] = useState(null);
  const [quantitySizeL, setQuantitySizeL] = useState(null);

  const value = {
    setProductName,
    setProductDescription,
    setProductPrice,
    setQuantitySizeM,
    setQuantitySizeS,
    setQuantitySizeL,
    productName,
    productDescription,
    productPrice,
    quantitySizeS,
    quantitySizeM,
    quantitySizeL,
  };
  return (
    <div>
      <ProductContext.Provider value={value}>
        {children}
      </ProductContext.Provider>
    </div>
  );
};

export default ProductContextProvider;
