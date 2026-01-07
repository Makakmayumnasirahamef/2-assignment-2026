import ExpenseItem from "./component/ExpenseItem";

function ExpenseList({ expenses, deleteExpense }) {
  return (
    <ul>
      {expenses.map(exp => (
        <ExpenseItem
          key={exp.id}
          expense={exp}
          deleteExpense={deleteExpense}
        />
      ))}
    </ul>
  );
}

export default ExpenseList;