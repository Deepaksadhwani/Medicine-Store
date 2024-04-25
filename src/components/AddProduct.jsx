import React, { useContext, useRef } from "react";
import { ProductContext } from "../contexts/PorductContextProvider";

const AddProduct = () => {
  const {
    setProductName,
    setProductDescription,
    setProductPrice,
    setQuantitySizeM,
    setQuantitySizeS,
    setQuantitySizeL,
  } = useContext(ProductContext);

  const name = useRef(null);
  const Description = useRef(null);
  const price = useRef(null);
  const sizeS = useRef(null);
  const SizeM = useRef(null);
  const SizeL = useRef(null);
  const addProductHandler = () => {
    setProductName(name.current.value);
    setProductDescription(Description.current.value);
    setProductPrice(price.current.value);
    setQuantitySizeL(SizeL.current.value);
    setQuantitySizeM(SizeM.current.value);
    setQuantitySizeS(sizeS.current.value);
  };

  return (
    <div className="w-full bg-white ">
      <div className="flex items-center justify-center space-x-9 py-10  shadow-lg ">
        <div className="flex flex-col space-y-1">
          <label>Product Name:</label>
          <input
            ref={name}
            type="text"
            placeholder="Enter T-shirt Name"
            className="rounded-md border-2 border-gray-400 placeholder:p-2"
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
              ref={sizeS}
              type="number"
              placeholder="S"
              className=" w-10 border-2 border-gray-400 placeholder:text-center"
            />
            <input
              ref={SizeM}
              type="number"
              placeholder="M"
              className="w-10 border-2 border-gray-400  placeholder:text-center"
            />
            <input
              ref={SizeL}
              type="number"
              placeholder="L"
              className="w-10 border-2 border-gray-400 placeholder:text-center"
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
      <button>Card</button>
    </div>
  );
};

export default AddProduct;
