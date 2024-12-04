import ExpenseItem from '../ExpenseItem/ExpenseItem'
import PropTypes from 'prop-types';


const Expenses = ({ items }) => {
  return (
    <div>
      {items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
};

Expenses.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      date: PropTypes.instanceOf(Date).isRequired,
    })
  ).isRequired,
};

export default Expenses;

