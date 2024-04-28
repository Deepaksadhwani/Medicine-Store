import React, { useContext } from "react";
import { ProductContext } from "../contexts/PorductContextProvider";

const CartDisplay = ({ name, description, price, quantity }) => {
  const totalAmount = price * quantity;
  const { setShowMortal } = useContext(ProductContext);
  return (
    <div className="mx-auto w-full  max-w-md rounded-lg bg-white p-6 shadow-lg">
      <h2 className="mb-4 text-2xl font-semibold">{name}</h2>
      <p className="mb-4 text-gray-600">{description}</p>
      <div className="mb-4 flex items-center justify-between">
        <span className="text-lg font-semibold">Price:</span>
        <span className="text-gray-800">${price}</span>
      </div>
      <div className="mb-4 flex items-center justify-between">
        <span className="text-lg font-semibold">Quantity:</span>
        <span className="text-gray-800">{quantity}</span>
      </div>
      <div className="mb-6 flex items-center justify-between">
        <span className="text-lg font-semibold">Total Amount:</span>
        <span className="text-gray-800">${totalAmount}</span>
      </div>
      <div className="flex items-center justify-between ">
        <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
          Purchase
        </button>
        <button
          onClick={() => setShowMortal((prev) => !prev)}
          className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-800"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CartDisplay;
