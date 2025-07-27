import React, { useState } from "react";
import { items as initialItems } from "../data/items";
import CartItem from "./CartItem";
import OrderSummary from "./OrderSummary";
import "../styles/cart.css";

const CartList = () => {
  const [cartItems, setCartItems] = useState(
    initialItems.map((item) => ({ ...item, quantity: 1 }))
  );

  const increment = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrement = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const remove = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="cart-container">
      <div className="cart-items">
        <h2>Cart Items ({cartItems.length})</h2>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onIncrement={increment}
            onDecrement={decrement}
            onRemove={remove}
          />
        ))}
      </div>
      <OrderSummary items={cartItems} />
    </div>
  );
};

export default CartList;
