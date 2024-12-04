import PropTypes from 'prop-types';
import './ExpenseDate.module.css';
import css from './ExpenseDate.module.css'

const ExpenseDate = ({ date }) => {
  const month = date.toLocaleString('en-US', { month: 'long' });
  const day = date.toLocaleString('en-US', { day: '2-digit' });
  const year = date.getFullYear();

  return (
    <div className={css.expenseDate}>
      <div className={css.expenseDateMonth}>{month}</div>
      <div className={css.expenseDateYear}>{year}</div>
      <div className={css.expenseDateDay}>{day}</div>
    </div>
  );
};

ExpenseDate.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
};

export default ExpenseDate;