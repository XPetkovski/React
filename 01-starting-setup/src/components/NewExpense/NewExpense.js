import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        //console.log(expenseData); //we give ID number with math random to expenseData
        props.onAddExpense(expenseData);
    };

    return(
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} /> {/*Now it's pointer at this function (expenseData0 */}
            {/*Triggered function when something happens inside NewExpense component */}
        </div>
    );
};

export default NewExpense;