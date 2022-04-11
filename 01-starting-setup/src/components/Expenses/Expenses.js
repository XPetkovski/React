import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {

    const[filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
      setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    }); //function that filters items by year
    //let expensesContent = <p>No expenses found!</p>; //stored msg in variable

    return(
        <div>
        <Card className='expenses'>


            <ExpensesFilter
                selected={filteredYear}
                onChangeFilter = {filterChangeHandler}
            />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses}/>
            {/*we move the expenses logic up above return and just do dynamic braces to call it here*/}

            {/*<h2>Let's get started!</h2>*/}
            {/*<p>This is also visible</p>*/}
            {/*<ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date} />*/}
            {/*<ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date} />*/}
            {/*<ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date} />*/}
            {/*<ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date} />*/}
            {/*<ExpenseItem title={props.items[4].title} amount={props.items[4].amount} date={props.items[4].date} />*/}
            {/* referencirani objekti so [X] koi se pokazuvaat na web stranata, zemeni od const expenses
             self closing because no code inbetween tags so no need*/}
        </Card>
        </div>
    );
}

export default Expenses;