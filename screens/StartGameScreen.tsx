import React from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';
import Card from '../components/Card';

const StartGameScreen = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Start a new game!</Text>
			<Card style={styles.inputContainer}>
				<Text>Select a number</Text>
				<TextInput />
				<View style={styles.btnContainer}>
					<Button title="reset" onPress={() => {}} />
					<Button title="Confirm" onPress={() => {}} />
				</View>
			</Card>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
		alignItems: 'center',
	},
	btnContainer: {
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-between',
		paddingHorizontal: 15,
	},
	inputContainer: {
		alignItems: 'center',
		width: 300,
		maxWidth: '80%',
		padding: 20,
	},
	title: {
		fontSize: 20,
		marginVertical: 10,
	},
});

export default StartGameScreen;
