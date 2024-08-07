import React from "react";
const ExpenseItem=({expense,onDelete})=>{
    return(
        <div>
            <span>{expense.description}-${expense.amount}</span>
            <button onClick={()=>onDelete(expense._id)}>Delete</button>
        </div>
    )
}
export default ExpenseItem;