import ReceiptForm from "./ReceiptForm";
import "./NewReceipt.css";

const NewReceipt = (props) => {
  const addReceiptItemHandler = (enteredReceiptItem) => {
    const receiptItemData = {
      ...enteredReceiptItem,
      id: Math.random().toString(),
    };
    props.onAddReceiptItem(receiptItemData);
  };

  return (
    <div className="new-receipt-elemnt__container">
      <ReceiptForm onAddReceiptItem={addReceiptItemHandler} />
    </div>
  );
};

export default NewReceipt;
