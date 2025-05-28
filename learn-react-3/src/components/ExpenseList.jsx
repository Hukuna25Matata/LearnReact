function ExpenseList({ expenses, deleteExpense }) {
    return (
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            {expense.title}: ₹{expense.amount.toFixed(2)}
            <button onClick={() => deleteExpense(index)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  }
  
  export default ExpenseList;
  