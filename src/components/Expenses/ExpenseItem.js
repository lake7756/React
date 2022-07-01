import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const [title, setTile] = useState(props.title);
  console.log("Expense item re-evaluated by React");

  const clickHandler = () => {
    setTile("Updated");
    console.log(title);
  };
  return (
    //className used instead of class since class is a reserved word in javascript.
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description ">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

//Exporting expense item as default for this file.
export default ExpenseItem;
