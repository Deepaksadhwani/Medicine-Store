import React, { useContext, useRef } from "react";
import { ProductContext } from "../contexts/PorductContextProvider";
import { FaShoppingCart } from "react-icons/fa";
import Modal from "./Modal";

const AddProduct = () => {
  const { userData, setUserData, selectedQuantity, showMortal, setShowMortal } =
    useContext(ProductContext);

  const name = useRef(null);
  const Description = useRef(null);
  const price = useRef(null);
  const quantity = useRef(null);

  const addProductHandler = () => {
    const newProduct = {
      name: name.current.value,
      Description: Description.current.value,
      price: price.current.value,
      quantity: quantity.current.value,
    };
    setUserData((prev) => [...prev, newProduct]);
  };
  console.log(userData);

  return (
    <div className="w-full bg-white ">
      <div className="flex items-center justify-center space-x-9 py-10  shadow-lg ">
        <div className="flex flex-col space-y-1">
          <label>Medicine Name:</label>
          <input
            ref={name}
            type="text"
            placeholder="Enter Medicine Name"
            className="rounded-md border-2 border-gray-400 placeholder:p-2 "
          />
        </div>
        <div className="flex flex-col space-y-1">
          <label>Product Description:</label>
          <input
            ref={Description}
            type="text"
            placeholder="Description"
            className="rounded-md border-2 border-gray-400 placeholder:p-2"
          />
        </div>
        <div className="flex flex-col space-y-1">
          <label>Product Price:</label>
          <input
            ref={price}
            type="number"
            placeholder="Price"
            className="rounded-md border-2 border-gray-400 placeholder:p-2"
          />
        </div>

        <div className="space-y-1">
          <label>Quantity Available</label>
          <div className="flex justify-center space-x-1 ">
            <input
              ref={quantity}
              type="number"
              placeholder="Qty. "
              className=" w-14 appearance-none border-2 border-gray-400 placeholder:text-center"
            />
          </div>
        </div>

        <button
          onClick={addProductHandler}
          className=" mt-4 rounded-lg bg-fuchsia-700 px-2 py-2 font-semibold text-white transition-all duration-300 hover:bg-fuchsia-800"
        >
          Add product
        </button>
      </div>
      <button
        onClick={() => setShowMortal((prev) => !prev)}
        className="absolute right-7 top-14 flex items-center gap-2 rounded-lg bg-blue-400 p-2 font-semibold text-white transition-all duration-300 hover:bg-blue-500"
      >
        <FaShoppingCart />({selectedQuantity.length}) Card
      </button>
      {showMortal && <Modal />}
    </div>
  );
};

export default AddProduct;
