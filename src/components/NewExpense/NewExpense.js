import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onSaveNewExpenseData(expenseData);
  };

  const [isEditing, setIsEditing] = useState(false);
  const clickNewExpenseHandler = () => {
    setIsEditing(true);
  };

  const cancelHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={clickNewExpenseHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onCancel={cancelHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
