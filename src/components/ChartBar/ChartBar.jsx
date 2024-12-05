import css from'./ChartBar.module.css';

const ChartBar = ({ label, value, maxValue }) => {
  const barFillHeight = maxValue > 0 ? (value / maxValue) * 100 + '%' : '0%';

  return (
   
      <div className={css.chartBar}>
      <div className={css.chartBarInner}>
        <div className={css.chartBarFill} style={{ height: barFillHeight }}></div>
      </div>
      <div className={css.chartBarLabel}>{label}</div>
    </div>

  );
};

export default ChartBar;

