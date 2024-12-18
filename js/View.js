class FinanceView {
    constructor() {
        this.transactionForm = document.getElementById('transaction-form');
        this.transactionsList = document.getElementById('transactions-list');
        this.totalBalanceElem = document.getElementById('total-balance');
        this.typeFilter = document.getElementById('type-filter');
        this.categoryFilter = document.getElementById('category-filter');
    }
    bindAddTransaction(handler) {
        this.transactionForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const type = document.getElementById('type').value;
            const category = document.getElementById('category').value;
            const amount = parseFloat(document.getElementById('amount').value);
            if (!type || !category || isNaN(amount) || amount <= 0) {
                alert("Пожалуйста, выберите тип операции, категорию и введите положительную сумму.");
                return;
            }

            handler(type, category, amount);
        });
    }

    bindRemoveTransaction(handler) {
        this.transactionsList.addEventListener('click', (event) => {
            if (event.target.classList.contains('delete-button')) {
                const index = event.target.dataset.index; 
                handler(index);
            }
        });
    }

    bindFilterChange(handler) {
        this.typeFilter.addEventListener('change', handler);
        this.categoryFilter.addEventListener('change', handler);
    }
    renderTransactions(transactions) {
        this.transactionsList.innerHTML = ''; 
        transactions.forEach((transaction, index) => {
            const transactionElem = document.createElement('div');
            transactionElem.classList.add('transaction', transaction.type);

            transactionElem.innerHTML = `
                <span> ${transaction.category}</span> 
                <span> ${transaction.type === 'income' ? '(income):' : '(expense):'}</span>
                <span>${transaction.type === 'income' ? '+' : '-'}${transaction.amount} руб.</span>
                <button class="delete-button" data-index="${index}">Удалить</button>
            `;
            this.transactionsList.appendChild(transactionElem);
        });
    }
    renderTotalBalance(totalBalance) {
        this.totalBalanceElem.textContent = totalBalance;
    }
}
