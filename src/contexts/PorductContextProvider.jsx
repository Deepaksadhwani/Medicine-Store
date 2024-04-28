import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();
const URL = "https://crudcrud.com/api/48a6d1d077af44c3ad0fb048fdaa8bea/cart";

const getData = async () => {
  const response = await axios.get(URL);
  console.log("getData", response.data?.[0]);
  return response.data;
};
const ProductContextProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);
  const [selectedQuantity, setSelectedQuantity] = useState([]);
  const [showMortal, setShowMortal] = useState(false);

  const value = {
    userData,
    setUserData,
    selectedQuantity,
    setSelectedQuantity,
    showMortal,
    setShowMortal,
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setSelectedQuantity((prev) => [...prev,   ...data]);
    };
    fetchData();
  }, []);
  return (
    <div>
      <ProductContext.Provider value={value}>
        {children}
      </ProductContext.Provider>
    </div>
  );
};

export default ProductContextProvider;
