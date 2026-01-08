import { useState } from 'react';
import ExpenseForm from './component/ENxpenseform';
import ExpenseList from './expenselist';
import Summary from './Summary';

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (title, amount) => {
    setExpenses([
      ...expenses,
      { id: Date.now(), title, amount: Number(amount) }
    ]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(exp => exp.id !== id));
  };

  const clearAll = () => {
    setExpenses([]);
  };

  return (
    <div>
      <h1>Expense Splitter</h1>

      <ExpenseForm addExpense={addExpense} />

      {expenses.length === 0 ? (
        <p>No expenses yet</p>
      ) : (
        <>
          <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
          <Summary expenses={expenses} />
          <button onClick={clearAll}>Clear All</button>
        </>
      )}
    </div>
  );
}

export default App;