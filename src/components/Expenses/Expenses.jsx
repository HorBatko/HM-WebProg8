import { useState } from 'react';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import ExpensesChart from '../ExpensesChart/ExpensesChart';

const Expenses = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState('all'); // По умолчанию "Показать все"

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  // Логика фильтрации
  const filteredExpenses =
    filteredYear === 'all'
      ? items // Если выбрано "Показать все", возвращаем весь список
      : items.filter((expense) => expense.date.getFullYear().toString() === filteredYear);

  return (
    <div>
      
      <ExpensesFilter selectedYear={filteredYear} onChangeYear={filterChangeHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      {filteredExpenses.length === 0 ? ( // Проверяем, есть ли данные
        <p>No expenses found.</p>
      ) : (
        filteredExpenses.map((expense) => (
          
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )}
      
    </div>
  );
};

export default Expenses;
