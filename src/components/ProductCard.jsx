import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../contexts/PorductContextProvider";
import axios from "axios";

const URL = "https://crudcrud.com/api/48a6d1d077af44c3ad0fb048fdaa8bea/cart";

const postData = async (userData) => {
  const response = await axios.post(URL, userData);
  console.log(response);
};
const ProductCard = ({ name, description, price, quantity }) => {
  const [initialQuantity, setInitialQuantity] = useState(quantity);
  const { setSelectedQuantity, selectedQuantity } = useContext(ProductContext);
  const [localSelectQuantity, setLocalQuantity] = useState(0);

  const handleSelectQuantity = (event) => {
    setLocalQuantity(event.target.value);
  };
  
  

  const addCartHandler = () => {
    setInitialQuantity(initialQuantity - localSelectQuantity);
    const cartData = {
      name: name,
      description: description,
      price: price,
      quantity: localSelectQuantity,
    };
    postData(cartData)
    setSelectedQuantity((prev) => [...prev, cartData]);
    setLocalQuantity(0);
  };

  console.log(selectedQuantity);
  return (
    <div className="mx-auto max-w-3xl overflow-hidden rounded-lg bg-white shadow-2xl ">
      <div className="p-6 ">
        <h2 className="mb-2 text-2xl font-semibold">{name}</h2>
        <p className="mb-4 text-gray-600">{description}</p>
        <p className="mb-4 text-lg font-semibold">${price}</p>
        <div className="mb-4 flex items-center space-x-3">
          <label>Available Quantity:</label>
          <input
            type="number"
            value={initialQuantity}
            className=" w-12 appearance-none border-2 border-gray-400 placeholder:text-center"
          />
        </div>
        <div className="mb-4 flex items-center space-x-3">
          <label>Selected Quantity:</label>
          <input
            onChange={handleSelectQuantity}
            type="number"
            value={localSelectQuantity}
            className=" w-12 appearance-none border-2 border-gray-400 placeholder:text-center"
          />
        </div>
        <button
          onClick={addCartHandler}
          className="rounded-md bg-indigo-500 px-4 py-2 font-semibold text-white hover:bg-indigo-600"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
