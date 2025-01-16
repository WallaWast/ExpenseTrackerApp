import { createContext, useReducer } from 'react';

const DUMMY_EXPENSES = [
	{
		id: 'e1',
		description: 'A pair of shoes',
		amount: 59.2,
		date: new Date('2025-01-14'),
	},
	{
		id: 'e2',
		description: 'A pair of trousers',
		amount: 89.99,
		date: new Date('2025-01-12'),
	},
	{
		id: 'e3',
		description: 'Some bananas',
		amount: 5.1,
		date: new Date('2025-01-07'),
	},
	{
		id: 'e4',
		description: 'Book',
		amount: 15.99,
		date: new Date('2025-01-13'),
	},
	{
		id: 'e5',
		description: 'Some Books',
		amount: 35.99,
		date: new Date('2024-12-07'),
	},
	{
		id: 'e6',
		description: 'Some Books',
		amount: 99.99,
		date: new Date('2024-07-07'),
	},
	{
		id: 'e7',
		description: 'Some Books',
		amount: 63.99,
		date: new Date('2024-04-01'),
	},
	{
		id: 'e8',
		description: 'Some Books',
		amount: 24.99,
		date: new Date('2024-11-09'),
	},
	{
		id: 'e9',
		description: 'Some Books',
		amount: 19.99,
		date: new Date('2024-12-07'),
	},
	{
		id: 'e10',
		description: 'Some Books',
		amount: 11.99,
		date: new Date('2025-01-07'),
	},
];

export const ExpensesContext = createContext({
	expenses: [],
	addExpense: ({ description, amount, date }) => {},
	updateExpense: (id, { description, amount, date }) => {},
	deleteExpense: (id) => {},
});

function expensesReducer(state, action) {
	switch (action.type) {
		case 'ADD':
			const id = new Date().toString() + Math.random().toString();
			return [{ ...action.payload, id: id }, ...state];
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
	const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

	function addExpense(expenseData) {
		dispatch({ type: 'ADD', payload: expenseData });
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
		deleteExpense: deleteExpense,
		updateExpense: updateExpense,
	};

	return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>;
};

export default ExpensesContextProvider;
