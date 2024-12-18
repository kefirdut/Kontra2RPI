class FinancePresenter {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.view.bindAddTransaction(this.handleAddTransaction.bind(this));
        this.view.bindRemoveTransaction(this.handleRemoveTransaction.bind(this));
        this.view.bindFilterChange(this.handleFilterChange.bind(this));
        this.updateView();
    }

    handleAddTransaction(type, category, amount) {
        this.model.addTransaction(type, category, amount);
        this.updateView();
    }

    handleRemoveTransaction(index) {
        this.model.removeTransaction(index);
        this.updateView();
    }

    handleFilterChange() {
        this.updateView(); 
    }

    updateView() {
        const typeFilter = this.view.typeFilter.value;
        const categoryFilter = this.view.categoryFilter.value;
        const filteredTransactions = this.model.getFilteredTransactions(typeFilter, categoryFilter);
        this.view.renderTransactions(filteredTransactions);
        this.view.renderTotalBalance(this.model.getTotalBalance());
    }
}
