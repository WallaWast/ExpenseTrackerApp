import { StyleSheet, Text, View } from 'react-native';
import Input from './Input';
import { useState } from 'react';
import Button from '../UI/Button';
import { getFormattedDate } from '../../util/date';

const ExpenseForm = ({ onCancel, onSubmit, submitButtonLabel, defaultValues }) => {
	const [inputValues, setInputValues] = useState({
		amount: defaultValues ? defaultValues.amount.toString() : '',
		date: defaultValues ? getFormattedDate(defaultValues.date) : '',
		description: defaultValues ? defaultValues.description : '',
	});

	function inputChangedHandler(inputIdentifier, enteredValue) {
		setInputValues((curInputValues) => {
			return {
				...curInputValues,
				[inputIdentifier]: enteredValue,
			};
		});
	}

	function submitHandler() {
		const expenseData = {
			amount: +inputValues.amount,
			date: new Date(inputValues.date),
			description: inputValues.description,
		};

		onSubmit(expenseData);
	}

	return (
		<View style={styles.form}>
			<Text style={styles.title}>Your Expense</Text>
			<View style={styles.inputRows}>
				<Input
					label='Amount'
					style={styles.rowInput}
					textInputConfig={{
						keyboardType: 'decimal-pad',
						onChangeText: inputChangedHandler.bind(this, 'amount'),
						value: inputValues.amount,
					}}
				/>
				<Input
					label='Date'
					style={styles.rowInput}
					textInputConfig={{
						placeholder: 'YYYY-MM-DD',
						maxLength: 10,
						onChangeText: inputChangedHandler.bind(this, 'date'),
						value: inputValues.date,
					}}
				/>
			</View>
			<Input
				label='Description'
				textInputConfig={{
					multiline: true,
					onChangeText: inputChangedHandler.bind(this, 'description'),
					value: inputValues.description,
				}}
			/>
			<View style={styles.buttons}>
				<Button mode='flat' style={styles.button} onPress={onCancel}>
					Cancel
				</Button>
				<Button onPress={submitHandler} style={styles.button}>
					{submitButtonLabel}
				</Button>
			</View>
		</View>
	);
};

export default ExpenseForm;

const styles = StyleSheet.create({
	form: {
		marginTop: 10,
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		color: 'white',
		marginVertical: 10,
		textAlign: 'center',
	},
	inputRows: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	rowInput: {
		flex: 1,
	},
	buttons: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	button: { minWidth: 120, marginHorizontal: 8 },
});
