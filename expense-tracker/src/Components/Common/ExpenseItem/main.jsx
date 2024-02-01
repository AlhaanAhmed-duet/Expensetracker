import './style.css';
const ExpenseItem = ({expensedata}) => {
            const displayExpenseData = expensedata.map(function(expenses) {
                
                // const deleteAction = expensedata.filter((d) => {
                //     return d.id === expenses.id
                // })
                // // const editAction = expensedata.filter((d) => {
                // //     return d.id === expenses.id
                // // })
                
                
                
                
                return (
                    <li key={expenses.id}>
                        <div>Title: {expenses.title}</div>
                        <div>Cost: Rs. {expenses.cost}/-</div>
                        <div>Date: {expenses.date}</div>
                        <button>Delete</button>
                        <button>Edit</button>
                    </li>
                )
            })

            return (
                <ul>
                    {displayExpenseData}
                </ul>
            )
        


    
}
export default ExpenseItem;