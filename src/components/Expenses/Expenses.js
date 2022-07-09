import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList";

import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, filteredYearHandler] = useState("2020");

  const seletedYearHandler = (selectedYear) => {
    filteredYearHandler(selectedYear);
  };

  const filteredExpenses = props.items.filter(item => item.date.getFullYear().toString() === filteredYear)
   
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onSelectYear={seletedYearHandler}
      />
      <ExpenseList expenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
