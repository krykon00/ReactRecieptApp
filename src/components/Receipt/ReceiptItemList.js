import ReceiptItem from "./ReceiptItem";
import "./ReceiptItemList.css";

const ReceiptItemList = (props) => {
  let receiptListContent = <p>Brak elementów paragonu.</p>;

  if (props.items.length > 0) {
    receiptListContent = props.items.map((item) => (
      <ReceiptItem
        key={item.id}
        name={item.name}
        quantity={item.quantity}
        value={item.value}
        discount={item.discount}
        price={item.price}
      />
    ));
  }

  return <div className="recit-items-list">{receiptListContent}</div>;
};

export default ReceiptItemList;
