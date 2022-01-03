import './ExpenseDate.css'

const ExpenseDate = (props) => {
  //change this to moment.js
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className='expense-date'>
      <div className='expense-date__year'>{ month }</div>
      <div className='expense-date__day'>{ day }</div>
      <div className='expense-date__year'>{ year }</div>
    </div>
  );
}

export default ExpenseDate;
