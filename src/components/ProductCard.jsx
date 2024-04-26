import React from "react";

const ProductCard = ({ name, description, price, L, M, S }) => {
  console.log(name, description, price, L, M, S);
  return (
    <div className="mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow-md">
      <div className="p-6">
        <h2 className="mb-2 text-2xl font-semibold">{name}</h2>
        <p className="mb-4 text-gray-600">{description}</p>
        <p className="mb-4 text-lg font-semibold">${price}</p>
        <div className="mb-4 flex space-x-3 items-center">
          <label >L:</label>
          <p className="rounded-md bg-gray-200 px-4 py-2 font-semibold text-gray-800 hover:bg-gray-300">
            {L}
          </p>
          <label >M:</label>
          <p className="rounded-md bg-gray-200 px-4 py-2 font-semibold text-gray-800 hover:bg-gray-300">
            {M}
          </p>
          <label >L:</label>
          <p className="rounded-md bg-gray-200 px-4 py-2 font-semibold text-gray-800 hover:bg-gray-300">
            {S}
          </p>
        </div>
        <button className="rounded-md bg-indigo-500 px-4 py-2 font-semibold text-white hover:bg-indigo-600">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
