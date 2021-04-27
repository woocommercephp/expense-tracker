import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function IncomeExpences() {
  const { transactions } = useContext(GlobalContext);

  console.log(transactions);

  const amounts = transactions.map((t) => Number(t.amount) || 0);

  const income = amounts.reduce((acc, cur) => {
    return cur > 0 ? acc + cur : acc;
  }, 0);

  const expense = amounts.reduce((acc, cur) => {
    return cur < 0 ? acc + cur : acc;
  }, 0);

  // const expense = amounts
  //   .filter((a) => a < 0)
  //   .reduce((acc, cur) => acc + cur);

  return (
    <>
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">${income.toFixed(2)}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">${Math.abs(expense).toFixed(2)}</p>
        </div>
      </div>
    </>
  );
}

export default IncomeExpences;
