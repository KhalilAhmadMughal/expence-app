import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  if (props.items.length === 0)
    return <h2 className="message">no expense found!</h2>;

  return (
    <ul>
      {props.items.map((currExpense) => (
        <ExpenseItem
          key={currExpense.id}
          title={currExpense.title}
          amount={currExpense.amount}
          date={currExpense.date}
        />
      ))}
    </ul>
  );
};
export default ExpenseList;
