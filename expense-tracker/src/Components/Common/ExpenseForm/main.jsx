import './style.css';
import React, { useState } from 'react';
const ExpenseForm = function ({setExpenses}) {
    var [expenseitems, setexpenseitems] = useState({
        id: 0,
        enteredtitle: "",
        enteredcost: 0,
        entereddate: "",
    });

    var titleHandler = function(event) {
        setexpenseitems({...expenseitems, enteredtitle: event.target.value, randomid: Math.round(Math.random() * 100)})
    }
    var costHandler = function(event) {
        setexpenseitems({...expenseitems, enteredcost: event.target.value})
    }
    var dateHandler = function(event) {
        setexpenseitems({...expenseitems, entereddate: event.target.value})
    }
    const onsubmitHandler = function (event) {
        event.preventDefault();
        const updatedExpenseData = 
        {
            id: expenseitems.randomid,
            title: expenseitems.enteredtitle,
            cost: expenseitems.enteredcost,
            date: expenseitems.entereddate
        }   
        setExpenses(updatedExpenseData)
        setexpenseitems({
            enteredtitle: "",
            enteredcost: "",
            entereddate: ""
        })
    }
    return (
        <>
            <div className='container'>
                <form onSubmit={onsubmitHandler}>
                    <div className="container-form">
                        <input
                            id="expense-name"
                            type='text'
                            placeholder='Enter your expenses of today'
                            onChange={titleHandler}
                            value={expenseitems.enteredtitle}
                        />
                        <input
                            id='expense-cost'
                            type='number'
                            placeholder='Enter the cost of expense'
                            onChange={costHandler}
                            value={expenseitems.enteredcost}

                        />
                        <input
                            id='expense-date'
                            type='date'
                            placeholder='Enter Date'
                            onChange={dateHandler}
                            value={expenseitems.entereddate}
                        />
                        <button type="submit">Add Expenses</button>
                    </div>
                </form>
                
            </div>
            
        </>
    );
};
export default ExpenseForm;
