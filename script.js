let expenses = [];

function addExpense() {
    const expenseInput = document.getElementById("expenseInput");
    const expense = expenseInput.value;
    
    if (expense.trim() !== "") {
        expenses.push(expense);
        displayExpenses();
        expenseInput.value = "";
    }
}

function displayExpenses() {
    const expenseList = document.getElementById("expenseList");
    expenseList.innerHTML = "";
    
    expenses.forEach(expense => {
        const li = document.createElement("li");
        li.innerText = expense;
        expenseList.appendChild(li);
    });
}
