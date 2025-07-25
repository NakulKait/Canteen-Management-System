import React from "react";

const OrderSummary = ({ items }) => {
  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const serviceFee = 10;
  const total = subtotal + serviceFee;

  return (
    <div className="order-summary">
      <h2>Order Summary</h2>
      {items.map((item) => (
        <p key={item.id}>
          {item.name} × {item.quantity}{" "}
          <span>₹{item.price * item.quantity}</span>
        </p>
      ))}
      <hr />
      <p>
        Subtotal <span>₹{subtotal}</span>
      </p>
      <p>
        Service Fee <span>₹{serviceFee}</span>
      </p>
      <hr />
      <h3>
        Total
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
        <span>₹{total}</span>
      </h3>
      <button className="pay-btn">Proceed to Payment</button>
    </div>
  );
};

export default OrderSummary;
