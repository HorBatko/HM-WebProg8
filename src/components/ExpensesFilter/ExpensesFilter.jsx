
import css from './ExpensesFilter.module.css';

const ExpensesFilter = ({ selectedYear, onChangeYear }) => {
  const dropdownChangeHandler = (e) => {
    onChangeYear(e.target.value);
  };

  return (
    <div className={css.expensesFilter}>
      <label>Filter by year</label>
      <select value={selectedYear} onChange={dropdownChangeHandler}>
        <option value="all">Show All</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
      </select>
    </div>
  );
};

export default ExpensesFilter;
