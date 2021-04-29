import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

function Balance() {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((t) => Number(t.amount) || 0);
  const balance = amounts.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  return (
    <div>
      <h4>Your Balance</h4>
      <h1>${balance.toFixed(2)}</h1>
    </div>
  );
}

export default Balance;
