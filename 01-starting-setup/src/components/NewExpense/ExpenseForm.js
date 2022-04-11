import './ExpenseForm.css'
import {useState} from "react";

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState(''); //mozes multiple states od komponent

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // }); //koristenje eden useState namesto 3 oddelni no ima finta, gi menja site 3 kljuca odednas a ako e
        // oddelno si menjas edno po edno

    const titleChangeHandler = (event) => { //za promena na naslov handler
        setEnteredTitle(event.target.value); // go importirame useState hookot preku koj namesto da pravime console.log
                                //imame setEnteredTitle koj ja pravi promenata na naslovot sto posakuvame da go smenime
        // setUserInput({
        //     ...userInput, //zima objekt gi vlece kljucevite i gi dodava i pak moze overwrite
        //     enteredTitle: event.target.value,
        // })

        //uste podobro resenie za overwriting
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState, enteredTitle: event.target.value
        //         //ova se koristi ako prethodniot state zavisi od noviot state
        //     };
        // });
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput, //zima objekt gi vlece kljucevite i gi dodava i pak moze overwrite
        //     enteredAmount: event.target.value,
        // })
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput, //zima objekt gi vlece kljucevite i gi dodava i pak moze overwrite
        //     enteredDate: event.target.value,
        // })
    };

    const submitHandler = (event) => {
        event.preventDefault(); //da ne se prakja request celo vreme, nema da se refreshira sajtot na sekoj submit klik
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }

        //console.log(expenseData); //instead of this, we use props now
        props.onSaveExpenseData(expenseData);
        setEnteredTitle(''); //overwrite userInput, clears the input after the user submits
        setEnteredAmount('');
        setEnteredDate(''); //KEY CONCEPT, 2 WAY BIND
    };

    return (
        <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                {/*value sets internal value property which every element has*/}
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" value={enteredDate} min="2019-01-01" step="2022-12-31" onChange={dateChangeHandler} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="button" onClick={props.onCancel}>Cancel</button>
            <button type="submit">Add Expense</button>
        </div>
            {/*KREIRANJE FORMA, LABEL pravi naslov na labela na formata, input e toa sto vnesuvame kako parametar ili vrednost w/e
            min e minimalna vrednost*/}
    </form>
    );
};

export default ExpenseForm;