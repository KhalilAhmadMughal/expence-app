import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //   const [, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDete: "",
  //   });

  // multiple slices approach
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleHandler = (event) => {
    setEnteredTitle(event.target.value);
    // // Wrong Approch
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // //Correct Approach
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredTitle: event.target.value,
    //   };
    // });
  };
  const amountHandler = (event) => {
    setEnteredAmount(event.target.value);
    // // Wrong Approch
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
    // //Correct Approach
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredAmount: event.target.value,
    //   };
    // });
  };
  const dateHandler = (event) => {
    setEnteredDate(event.target.value);
    // //Wrong Approach
    // setUserInput({
    //   ...userInput,
    //   enteredDete: event.target.value,
    // });
    // //Correct Approach
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredDete: event.target.value,
    //   };
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  const cancelClickHandler = (event) => {
    event.preventDefault();
    props.onCancel();
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Tile</label>
          <input type="text" value={enteredTitle} onChange={titleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-1-1"
            max="2022-2-7"
            value={enteredDate}
            onChange={dateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={cancelClickHandler}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
