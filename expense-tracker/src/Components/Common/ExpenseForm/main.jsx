import './style.css';
import React from 'react';
const ExpenseForm = function() {

    return (
        <div className='container'>
            <form>
            <div className="container-form">
                <input id="expense-name" type='text' placeholder='Enter your expenses of today'/>
                <input id='expense-cost' type='text' placeholder='Enter the cost of expense'/>
                <input id='expense-date'type='date' placeholder='Enter Date'/>
                <button>Add Expenses</button>
            </div>
            </form>
        </div>
    )

}

export default ExpenseForm;
