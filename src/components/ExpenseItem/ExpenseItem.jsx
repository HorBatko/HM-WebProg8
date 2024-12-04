import PropTypes from 'prop-types';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import css from './ExpenseItem.module.css'

const ExpenseItem = ({ title, amount, date }) => {
  return (
    <div className={css.expenseItem}>
      <ExpenseDate date={date} />
      <div className={css.expenseItemDescription}>{title}</div>
        <div className={css.expenseItemtitle}></div>
        <div className={css.expenseItemPrice}>${amount}</div>
     
    </div>
  );
};

ExpenseItem.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
};

export default ExpenseItem;
