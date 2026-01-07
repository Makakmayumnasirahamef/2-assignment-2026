function Summary({ expenses }) {
  const totalExpenses = expenses.length;

  const totalAmount = expenses.reduce(
    (sum, exp) => sum + exp.amount,
    0
  );

  const largestExpense =
    expenses.length > 0
      ? Math.max(...expenses.map(exp => exp.amount))
      : 0;

  return (
    <div>
      <h3>Summary</h3>
      <p>Total Expenses: {totalExpenses}</p>
      <p>Total Amount: ₹{totalAmount}</p>
      <p>Largest Expense: ₹{largestExpense}</p>
    </div>
  );
}

export default Summary;