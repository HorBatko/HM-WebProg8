import './ExpenseDate.module.css';

const ExpenseDate = (bottomdDate) => {
  const month = bottomdDate.toLocaleString('en-US', { month: 'long' });
  const day = bottomdDate.toLocaleString('en-US', { day: '2-digit' });
  const year = bottomdDate.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
