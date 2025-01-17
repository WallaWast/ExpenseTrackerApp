import { useContext } from 'react';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '../store/expenses-context';

const AllExpenses = () => {
	const expensesCtx = useContext(ExpensesContext);
	const orderedExpenses = expensesCtx.expenses.sort((a, b) => b.date - a.date);

	return (
		<ExpensesOutput expenses={orderedExpenses} expensesPeriod='Total' fallbackText='No registered expenses found.' />
	);
};

export default AllExpenses;
