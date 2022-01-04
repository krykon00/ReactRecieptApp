import { useState } from "react";
import "./ReceiptItem.css";

const ReceiptItem = (props) => {
  return (
    <div className="expense-item">
      <div className="expense-item-element">
        <h4>{props.name}</h4>
      </div>
      <div>
        <h4>x{props.quantity}</h4>
      </div>
      <div>
        <h4>{props.value} PLN</h4>
      </div>
      <div className="expense-item_price">
        <h4>{props.price} PLN</h4>
      </div>
    </div>
  );
};

export default ReceiptItem;
