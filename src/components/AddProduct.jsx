import React, { useContext, useRef } from "react";
import { ProductContext } from "../contexts/PorductContextProvider";
import { FaShoppingCart } from "react-icons/fa";

const AddProduct = () => {
  const { userData, setUserData } = useContext(ProductContext);
  
  const name = useRef(null);
  const Description = useRef(null);
  const price = useRef(null);
  const SizeS = useRef(null);
  const SizeM = useRef(null);
  const SizeL = useRef(null);
  const addProductHandler = () => {
    const newProduct = {
      name: name.current.value,
      Description: Description.current.value,
      price: price.current.value,
      SizeS: SizeS.current.value,
      SizeM: SizeM.current.value,
      SizeL: SizeL.current.value,
    };
    setUserData((prev) => [...prev, newProduct]);
  };
  console.log(userData);

  return (
    <div className="w-full bg-white ">
      <div className="flex items-center justify-center space-x-9 py-10  shadow-lg ">
        <div className="flex flex-col space-y-1">
          <label>Product Name:</label>
          <input
            ref={name}
            type="text"
            placeholder="Enter T-shirt Name"
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
          <div className="flex space-x-1 ">
            <input
              ref={SizeS}
              type="number"
              placeholder="S"
              className=" w-12 appearance-none border-2 border-gray-400 placeholder:text-center"
            />
            <input
              ref={SizeM}
              type="number"
              placeholder="M"
              className="w-12 appearance-none border-2 border-gray-400 placeholder:text-center"
            />
            <input
              ref={SizeL}
              type="number"
              placeholder="L"
              className="w-12 appearance-none border-2 border-gray-400 placeholder:text-center"
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
      <button className="top-14 absolute right-7 flex items-center gap-2 rounded-lg bg-blue-400 p-2 font-semibold text-white transition-all duration-300 hover:bg-blue-500">
        <FaShoppingCart />({userData.length}) Card
      </button>
    </div>
  );
};

export default AddProduct;
