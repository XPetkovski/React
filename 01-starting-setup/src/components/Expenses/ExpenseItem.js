import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import {useState} from "react";


function ExpenseItem(props) {
    /*const ExpenseDate = new Date(2022, 2, 5);
    const ExpenseTitle = 'Car Insurance';
    const ExpensePrice = 699.99;*/
    const [title, setTitle] = useState(props.title); //REACT HOOK, must be called inside a react component, cant be called outside or nested
    //title = pointer to props.title, setTitle = function which we can call to set new Title, returns array with 2 elements (useState)
    //let title = props.title; //ova ide vo h2

    //console.log("ExpenseItem evaluated by React ");

    const clickHandler = () => {
        //title = "UPDATED";
        //setTitle('UPDATED');
        //console.log(title);
    }

    return (
        <li>
        <Card className='expense-item'>
            <ExpenseDate date={props.date} /> {/* self-closing because we dont write code inbetween tags, referencirame kon props.date vo expensedate komponentot */}
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button className="button" onClick={clickHandler}>Change</button>
        </Card>
        </li>
    );
}

export default ExpenseItem;