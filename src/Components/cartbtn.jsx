// Componenta pentru Butonul de Coș de Cumpărături (CartButton.js)
import React, { useState } from "react";
import Cart from "./Cart";

const CartButton = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={toggleCart}>Coș ({items.length})</button>
      {isOpen && <Cart items={items} onClose={toggleCart} />}
    </>
  );
};

export default CartButton;
