import { React } from "react";
import ExpenseItem from "./ExpenseItem";

import "./ExpenseList.css";

const ExpenseList = (props) => { 

  if (props.expenses.length === 0) {
    return (<h2 className="expenses-list__fallback">Found no expenses.</h2>)
  } else {
    return (
    <ul className="expenses-list">
        {props.expenses.map(item => {
        return (
          <ExpenseItem
            key={item.title}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        );
      })}
    </ul>
    )
  }
}

export default ExpenseList;