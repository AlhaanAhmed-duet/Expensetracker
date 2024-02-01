import './App.css'
import {useEffect, useState } from 'react'
import ExpenseForm from './Components/Common/ExpenseForm/main'
import ExpenseTitle from './Components/Common/ExpenseTitle/main'
import ExpenseItem from './Components/Common/ExpenseItem/main'
function App() {

    const dummyExpenses = [
      {
        id: 1,
        title: "Chocolate Fudge Cake",
        cost: 450,
        date: new Date().toLocaleDateString()
      }
    ]
    const [expense, setExpense] = useState(dummyExpenses);
    
    
    const updatedExpenses = (data) => {
      setExpense(prevState => [...prevState, data])
    }
 

    
 


    return (
        <>
          <ExpenseTitle />
          <ExpenseForm setExpenses={updatedExpenses}/>
          <ExpenseItem  expensedata={expense}/>
        </>

    )
}

export default App
