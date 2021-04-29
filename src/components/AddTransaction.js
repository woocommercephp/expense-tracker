import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Button } from "@material-ui/core";

function AddTransaction() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext);
  return (
    <>
      <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            type="text"
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="number"
            placeholder="Enter amount..."
          />
        </div>
        <Button
          style={{ marginTop: 20 }}
          className="btn"
          variant="contained"
          color="primary"
          onClick={(e) => {
            e.preventDefault();
            addTransaction({
              id: Math.floor(Math.random() * 1000000000),
              text: text,
              amount: Number(amount),
            });
          }}
        >
          Add transaction
        </Button>
      </form>
    </>
  );
}

export default AddTransaction;
