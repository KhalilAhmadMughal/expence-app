import React, { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpenseChart";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");
  const filterYearHandler = (changedYear) => {
    setFilteredYear(changedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div className="container">
      <div className="filter-container">
        <div className="filter">
          <h4>Filter by year</h4>
          <ExpensesFilter
            selected={filteredYear}
            changeFilterYear={filterYearHandler}
          />
        </div>
        <ExpensesChart expenses={filteredExpenses} />
      </div>
      <Card className="expenses">
        <ExpenseList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
