import ExpenseDate from "../ExpenseDate/ExpenseDate";
import PropTypes from "prop-types";
import css from './ExpenseItem.module.css'

let ExpenseItem = ({ title, amount, date }) => {
  return (
    <div className="expense-item">
      <ExpenseDate bottomdDate={date} />
      <div className={css.expenseItemDescription}>
        <h2>{title}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
    </div>
  );
};

ExpenseItem.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
};

export default ExpenseItem;
