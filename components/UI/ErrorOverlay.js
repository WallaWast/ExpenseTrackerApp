import { View, Text, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../constants/styles';
import Button from './Button';

const ErrorOverlay = ({ message, showButton, onConfirm }) => {
	return (
		<View style={styles.container}>
			<Text style={[styles.text, styles.title]}>An error ocurred!</Text>
			<Text style={styles.text}>{message}</Text>
			if(showButton)
			<Button onPress={onConfirm}>Okay</Button>
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
