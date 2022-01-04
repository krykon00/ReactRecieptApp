import { useState } from "react";
import "./ReceiptForm.css";

const ReceiptForm = (props) => {
  const [price, setPrice] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredQnt, setEnteredQnt] = useState("");
  const [enteredValue, setEnteredValue] = useState("");
  const [enteredDisc, setEnteredDisc] = useState("0");

  const calculatePrice = (qnt = 0, value = 0, disc = 0) => {
    if (isNaN(qnt) || !qnt > 0 || !value > 0) return 0;
    return Number(
      Number.parseFloat(qnt) * Number.parseFloat(value) -
        Number.parseFloat(disc)
    ).toFixed(2);
  };

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const qntChangeHandler = (event) => {
    setEnteredQnt(event.target.value);
    setPrice(calculatePrice(event.target.value, enteredValue, enteredDisc));
  };
  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
    setPrice(calculatePrice(enteredQnt, event.target.value, enteredDisc));
  };
  const discChangeHandler = (event) => {
    setEnteredDisc(event.target.value);
    setPrice(calculatePrice(enteredQnt, enteredValue, event.target.value));
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const receiptItemData = {
      name: enteredName,
      quantity: enteredQnt,
      value: enteredValue,
      price: price,
    };

    //Sending data up
    props.onAddReceiptItem(receiptItemData);
    // Reseting values
    setEnteredName("");
    setEnteredQnt("");
    setEnteredValue("");
    setEnteredDisc("0");
    setPrice();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-receipt__controls">
        <div className="new-receipt__control">
          <label>Nazwa produktu</label>
          <input type="text" onChange={nameChangeHandler} value={enteredName} />
        </div>
        <div className="new-receipt__control">
          <label>Ilośc</label>
          <input
            type="number"
            min="0.01"
            step="0.001"
            value={enteredQnt}
            onChange={qntChangeHandler}
          />
        </div>
        <div className="new-receipt__control">
          <label>Cen jedn.</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredValue}
            onChange={valueChangeHandler}
          />
        </div>
        <div className="new-receipt__control">
          <label>Rabat</label>
          <input
            type="number"
            min="0.00"
            step="0.01"
            defaultValue="0"
            value={enteredDisc}
            onChange={discChangeHandler}
          />
        </div>
        <div className="new-receipt__control">Cena produktu: {price} PLN</div>
      </div>
      <div className="new-receipt__actions">
        <button type="submit">Dodaj produkt</button>
      </div>
      <div>
        Wartość paragonu: <span></span>
      </div>
    </form>
  );
};

export default ReceiptForm;
