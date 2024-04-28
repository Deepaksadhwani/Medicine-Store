import React, { useContext } from "react";
import { createPortal } from "react-dom";
import { ProductContext } from "../contexts/PorductContextProvider";
import CartDisplay from "./CartDisplay";
const mountedElement = document.getElementById("portal");

const Modal = () => {
  const { selectedQuantity } = useContext(ProductContext);
  return createPortal(
    <div className="inset-0 fixed flex  items-center justify-center bg-black bg-opacity-50">
      {selectedQuantity.map((item, index) => (
        <CartDisplay
          key={index}
          name={item.name}
          description={item.description}
          price= {item.price}
          quantity={item.quantity}
        ></CartDisplay>
      ))}
    </div>,
    mountedElement,
  );
};

export default Modal;
