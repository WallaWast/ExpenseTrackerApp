import { View, Text, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../constants/styles';
import Button from './Button';

const ErrorOverlay = ({ message, showButton, onConfirm }) => {
	var button = '';

	if (showButton) {
		button = <Button onPress={onConfirm}>Okay</Button>;
	}

	return (
		<View style={styles.container}>
			<Text style={[styles.text, styles.title]}>An error ocurred!</Text>
			<Text style={styles.text}>{message}</Text>
			{button}
		</View>
	);
};

export default ErrorOverlay;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 24,
		backgroundColor: GlobalStyles.colors.primary700,
	},
	text: {
		color: 'white',
		textAlign: 'center',
		marginBottom: 8,
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
	},
});
