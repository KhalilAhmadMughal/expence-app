import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

let DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "car insurance",
    amount: 475.8,
    date: new Date(2022, 13, 12),
  },
  {
    id: "e2",
    title: "bought cloths",
    amount: 90.5,
    date: new Date(2021, 3, 6),
  },
  {
    id: "e3",
    title: "dog food",
    amount: 175.75,
    date: new Date(2020, 31, 3),
  },
  {
    id: "e4",
    title: "car repairing",
    amount: 215.0,
    date: new Date(2023, 2, 1),
  },
];
function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const newExpenseDataHandler = (enterdExpenseData) => {
    const expenseData = {
      ...enterdExpenseData,
    };
    setExpenses((prevExpense) => {
      return [expenseData, ...prevExpense];
    });
  };

  return (
    <div>
      <NewExpense onSaveNewExpenseData={newExpenseDataHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
