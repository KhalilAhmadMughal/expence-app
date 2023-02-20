import React from "react";
import Card from "../UI/Card";
import "./ExpenseDate.css";

function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <Card className="expense-item__date">
      <div className="month">{month}</div>
      <div className="year">{year}</div>
      <div className="day">{day}</div>
    </Card>
  );
}

export default ExpenseDate;
