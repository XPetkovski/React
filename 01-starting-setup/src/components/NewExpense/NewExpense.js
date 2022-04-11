import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
import {useState} from "react";

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        //console.log(expenseData); //we give ID number with math random to expenseData
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    };

    return(
        <div className='new-expense'>
            {!isEditing && <button
                onClick={startEditingHandler}>Add new expense!</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}
                                       onCancel={stopEditingHandler}/> }
            {/*Now it's pointer at this function (expenseData0 */}
            {/*Triggered function when something happens inside NewExpense component */}
        </div>
    );
};

export default NewExpense;