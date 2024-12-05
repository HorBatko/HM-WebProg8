import ChartBar from '../ChartBar/ChartBar'
import css from './ExpensesChart.module.css'

const ExpensesChart = ({ expenses }) => {
  const monthlyTotals = Array(12).fill(0);
  expenses.forEach((expense) => {
    monthlyTotals[expense.date.getMonth()] += expense.amount;
  });

  const maxExpense = Math.max(...monthlyTotals);

  return (
    <div className={css.chartBarBox}>
      {monthlyTotals.map((value, index) => (
        <ChartBar
          key={index}
          value={value}
          maxValue={maxExpense}
          label={`${index + 1}`}
          
        />
      ))}
    </div>
  );
};

export default ExpensesChart;
