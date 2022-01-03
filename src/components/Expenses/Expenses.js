import './Expenses.css';
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from '../Card/Card'

const Expenses = (props) => {
  return (
    <Card className='expenses'>
      {
        props.expensesValue.map((value) => {
          return (
            <ExpenseItem 
             key={ value.id }
             title={ value.title }
             amount={ value.amount }
             date={ value.date } />
          ); 
        })
      }
    </Card>
  )
}

export default Expenses;