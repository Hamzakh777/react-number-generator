import React from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';

const StartGameScreen = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Start a new game!</Text>
			<View style={styles.inputContainer}>
				<Text>Select a number</Text>
				<TextInput />
				<View style={styles.btnContainer}>
					<Button title="reset" onPress={() => {}} />
					<Button title="Confirm" onPress={() => {}} />
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
		alignItems: 'center',
	},
	inputContainer: {
        alignItems: 'center',
        width: 300,
        maxWidth: '80%',
        padding: 20,
        borderRadius: 8,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 5,
        backgroundColor: 'white'
	},
	btnContainer: {
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-between',
		paddingHorizontal: 15,
	},
	title: {
		fontSize: 20,
		marginVertical: 10,
	},
});

export default StartGameScreen;
