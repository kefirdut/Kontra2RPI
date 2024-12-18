class FinanceModel {
    constructor() {
        this.transactions = [
            { type: 'income', category: 'salary', amount: 50000 },
            { type: 'expense', category: 'food', amount: 1500 },
            { type: 'expense', category: 'transport', amount: 800 },
            { type: 'income', category: 'bonus', amount: 2000 }
        ];
        this.totalBalance = this.calculateTotalBalance();
    }

    addTransaction(type, category, amount) {
        const transaction = { type, category, amount };
        this.transactions.push(transaction);
        this.totalBalance = this.calculateTotalBalance();
    }

    removeTransaction(index) {
        this.transactions.splice(index, 1);
        this.totalBalance = this.calculateTotalBalance();
    }

    calculateTotalBalance() {
        return this.transactions.reduce((total, transaction) => {
            return transaction.type === 'income' ? total + transaction.amount : total - transaction.amount;
        }, 0);
    }
    getFilteredTransactions(typeFilter, categoryFilter) {
        return this.transactions.filter(transaction => {
            const typeMatch = typeFilter ? transaction.type === typeFilter : true;
            const categoryMatch = categoryFilter ? transaction.category === categoryFilter : true;
            return typeMatch && categoryMatch;
        });
    }

    getTransactions() {
        return this.transactions;
    }

    getTotalBalance() {
        return this.totalBalance;
    }
}
