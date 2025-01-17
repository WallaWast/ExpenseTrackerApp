import { createContext, useReducer } from 'react';

export const ExpensesContext = createContext({
	expenses: [],
	addExpense: ({ description, amount, date }) => {},
	setExpenses: (expenses) => {},
	updateExpense: (id, { description, amount, date }) => {},
	deleteExpense: (id) => {},
});

function expensesReducer(state, action) {
	switch (action.type) {
		case 'ADD':
			//const id = new Date().toString() + Math.random().toString();
			const updatedState = [{ ...action.payload }, ...state];
			return updatedState.sort((a, b) => b.date - a.date);
		case 'SET':
			return action.payload;
		case 'UPDATE':
			const updateableExpenseIndex = state.findIndex((expense) => expense.id === action.payload.id);

			const updateableExpense = state[updateableExpenseIndex];
			const updatedItem = { ...updateableExpense, ...action.payload.data };
			const updatedExpenses = [...state];
			updatedExpenses[updateableExpenseIndex] = updatedItem;

			return updatedExpenses;
		case 'DELETE':
			return state.filter((expense) => expense.id !== action.payload);
		default:
			return state;
	}
}

const ExpensesContextProvider = ({ children }) => {
	const [expensesState, dispatch] = useReducer(expensesReducer, []);

	function addExpense(expenseData) {
		dispatch({ type: 'ADD', payload: expenseData });
	}

	function setExpenses(expenses) {
		dispatch({ type: 'SET', payload: expenses });
	}

	function deleteExpense(id) {
		dispatch({ type: 'DELETE', payload: id });
	}

	function updateExpense(id, expenseData) {
		dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData } });
	}

	const value = {
		expenses: expensesState,
		addExpense: addExpense,
		setExpenses: setExpenses,
		deleteExpense: deleteExpense,
		updateExpense: updateExpense,
	};

	return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>;
};

export default ExpensesContextProvider;
