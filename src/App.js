import "./App.css";
import { useState } from "react";
import ReceiptItemList from "./components/Receipt/ReceiptItemList";
import NewReceipt from "./components/NewReceipt/NewReceipt";

const App = () => {
  const [receiptItems, setReceiptItems] = useState([]);

  const addReceiptItemHandler = (receiptItem) => {
    setReceiptItems((prevReceiptsItmes) => [...prevReceiptsItmes, receiptItem]);
  };
  return (
    <div className="recit-container">
      <ReceiptItemList items={receiptItems} />
      <div className="recit-container__controller ">
        <NewReceipt onAddReceiptItem={addReceiptItemHandler} />
      </div>
    </div>
  );
};

export default App;
