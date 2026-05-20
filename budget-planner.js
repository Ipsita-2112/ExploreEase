

let expenses = [];

document.addEventListener('DOMContentLoaded', function() {
    const budgetPlanner = document.querySelector('.budget-planner-section');

    if (budgetPlanner) {
        initializeBudgetPlanner();
    }
});

function initializeBudgetPlanner() {
    const addExpenseBtn = document.querySelector('.add-expense-form button');
    const calculateBtn = document.querySelector('.calculate-btn');
    const savePlanBtn = document.querySelector('.save-plan-btn');
    const expenseName = document.getElementById('expenseName');
    const expenseAmount = document.getElementById('expenseAmount');

    
    loadExpenses();

    
    if (addExpenseBtn) {
        addExpenseBtn.addEventListener('click', addExpense);
    }

    
    if (expenseAmount) {
        expenseAmount.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                addExpense();
            }
        });
    }

    
    if (calculateBtn) {
        calculateBtn.addEventListener('click', calculateBudget);
    }

    
    if (savePlanBtn) {
        savePlanBtn.addEventListener('click', savePlan);
    }

    
    calculateBudget();
}

function addExpense() {
    const expenseName = document.getElementById('expenseName').value.trim();
    const expenseAmount = parseFloat(document.getElementById('expenseAmount').value);

    
    if (!expenseName) {
        showNotification('Please enter an expense category', 'error');
        return;
    }

    if (!expenseAmount || expenseAmount <= 0) {
        showNotification('Please enter a valid amount', 'error');
        return;
    }

    if (expenseAmount > 1000000) {
        showNotification('Amount cannot exceed ₹10,00,000', 'error');
        return;
    }

    
    if (expenses.some(exp => exp.name.toLowerCase() === expenseName.toLowerCase())) {
        showNotification('This expense category already exists', 'error');
        return;
    }

    
    const expense = {
        id: Date.now(),
        name: expenseName,
        amount: expenseAmount
    };

    expenses.push(expense);

    
    document.getElementById('expenseName').value = '';
    document.getElementById('expenseAmount').value = '';

    
    displayExpenses();
    calculateBudget();

    showNotification(`${expenseName} added successfully!`, 'success');
}

function displayExpenses() {
    const container = document.getElementById('expensesContainer');

    if (expenses.length === 0) {
        container.innerHTML = '<p class="no-expenses">No expenses added yet. Add your first expense above!</p>';
        return;
    }

    let html = '';
    expenses.forEach((expense, index) => {
        html += `
            <div class="expense-item" style="display: flex; justify-content: space-between; align-items: center; padding: 10px; border-bottom: 1px solid #eee; background: #f9f9f9; margin-bottom: 5px; border-radius: 4px;">
                <div style="flex: 1;">
                    <strong>${expense.name}</strong>
                    <span style="color: #666; margin-left: 10px;">₹${expense.amount.toLocaleString('en-IN')}/day</span>
                </div>
                <button onclick="deleteExpense(${expense.id})" style="background: #e74c3c; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 12px;">Delete</button>
            </div>
        `;
    });

    container.innerHTML = html;
}

function deleteExpense(id) {
    expenses = expenses.filter(exp => exp.id !== id);
    displayExpenses();
    calculateBudget();
    showNotification('Expense deleted successfully!', 'success');
}

function calculateBudget() {
    const duration = parseInt(document.getElementById('duration').value) || 1;
    const travelers = parseInt(document.getElementById('travelers').value) || 1;

    
    if (duration < 1 || duration > 365) {
        showNotification('Trip duration must be between 1 and 365 days', 'error');
        document.getElementById('duration').value = 1;
        return;
    }

    if (travelers < 1 || travelers > 100) {
        showNotification('Number of travelers must be between 1 and 100', 'error');
        document.getElementById('travelers').value = 1;
        return;
    }

    
    let dailyCost = 0;
    expenses.forEach(expense => {
        dailyCost += expense.amount;
    });

    
    const totalTripCost = dailyCost * duration * travelers;
    const costPerPerson = totalTripCost / travelers;

    
    document.getElementById('dailyCost').textContent = formatCurrency(dailyCost);
    document.getElementById('totalCost').textContent = formatCurrency(totalTripCost);
    document.getElementById('costPerPerson').textContent = formatCurrency(costPerPerson);

    
    updateBreakdownChart(duration, travelers);
}

function updateBreakdownChart(duration, travelers) {
    const breakdownContainer = document.getElementById('breakdownChart');

    if (expenses.length === 0) {
        breakdownContainer.innerHTML = '<p class="no-expenses">No expenses to display</p>';
        return;
    }

    let html = '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">';

    
    let totalDaily = 0;
    expenses.forEach(exp => {
        totalDaily += exp.amount;
    });

    expenses.forEach(expense => {
        const percentage = (expense.amount / totalDaily) * 100;
        const totalForExpense = expense.amount * duration * travelers;

        html += `
            <div style="padding: 15px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
                <h4 style="margin: 0 0 10px 0; font-size: 14px;">${expense.name}</h4>
                <div style="font-size: 18px; font-weight: bold; margin-bottom: 5px;">${formatCurrency(totalForExpense)}</div>
                <div style="font-size: 12px; opacity: 0.9;">
                    <div>Daily: ${formatCurrency(expense.amount)}</div>
                    <div style="margin-top: 5px;">
                        <div style="background: rgba(255,255,255,0.3); height: 6px; border-radius: 3px; margin-bottom: 3px;">
                            <div style="background: white; height: 6px; border-radius: 3px; width: ${percentage}%;"></div>
                        </div>
                        <div>${percentage.toFixed(1)}% of daily budget</div>
                    </div>
                </div>
            </div>
        `;
    });

    html += '</div>';
    breakdownContainer.innerHTML = html;
}

function savePlan() {
    const duration = document.getElementById('duration').value;
    const travelers = document.getElementById('travelers').value;

    if (expenses.length === 0) {
        showNotification('Please add at least one expense before saving', 'error');
        return;
    }

    const plan = {
        id: Date.now(),
        duration: duration,
        travelers: travelers,
        expenses: JSON.parse(JSON.stringify(expenses)),
        totalCost: document.getElementById('totalCost').textContent,
        costPerPerson: document.getElementById('costPerPerson').textContent,
        savedDate: new Date().toISOString()
    };

    
    let savedPlans = JSON.parse(localStorage.getItem('budgetPlans') || '[]');
    savedPlans.push(plan);
    localStorage.setItem('budgetPlans', JSON.stringify(savedPlans));

    showNotification('Budget plan saved successfully! You can access it later.', 'success');
}

function loadExpenses() {
    
    const savedExpenses = sessionStorage.getItem('currentExpenses');
    if (savedExpenses) {
        expenses = JSON.parse(savedExpenses);
        displayExpenses();
        calculateBudget();
    }
}


window.addEventListener('beforeunload', function() {
    sessionStorage.setItem('currentExpenses', JSON.stringify(expenses));
});


setInterval(function() {
    sessionStorage.setItem('currentExpenses', JSON.stringify(expenses));
}, 30000); 