import { useState } from 'react';
import css from './NewExpense.module.css';

const NewExpense = ({ onAddExpense }) => {
  const [formVisible, setFormVisible] = useState(false);
  const [inputData, setInputData] = useState({
    title: '',
    amount: '',
    date: '',
  });

  const toggleFormVisibility = () => {
    setFormVisible((prev) => !prev);
  };

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setInputData((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      ...inputData,
      amount: +inputData.amount,
      date: new Date(inputData.date),
    };
    onAddExpense(expenseData);
    setInputData({ title: '', amount: '', date: '' });
    setFormVisible(false);
  };

  return (
    <div className={css.newExpense}>
      {!formVisible && <button onClick={toggleFormVisibility}>Add New Expense</button>}
      {formVisible && (
        <form onSubmit={submitHandler}>
          <div className={css.newExpenseControls}>
            <div className={css.newExpenseControl}>
              <label>Title</label>
              <input
                type="text"
                name="title"
                value={inputData.title}
                onChange={inputChangeHandler}
              />
            </div>
            <div className={css.newExpenseControl}>
              <label>Amount</label>
              <input
                type="number"
                name="amount"
                value={inputData.amount}
                onChange={inputChangeHandler}
                min="0.01"
                step="0.01"
              />
            </div>
            <div className={css.newExpenseControl}>
              <label>Date</label>
              <input
                type="date"
                name="date"
                value={inputData.date}
                onChange={inputChangeHandler}
              />
            </div>
          </div>
          <div className={css.newExpenseActions}>
            <button className={css.btnCancel} type="button" onClick={toggleFormVisibility}>Cancel</button>
            <button type="submit">Add Expense</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default NewExpense;
