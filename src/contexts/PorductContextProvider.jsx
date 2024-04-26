import { createContext, useState } from "react";

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [userData,setUserData] = useState([]);
  const value = {
   userData,
   setUserData
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
