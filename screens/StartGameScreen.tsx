import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';
import colors from '../constants/colors';

const StartGameScreen = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Start a new game!</Text>
			<Card style={styles.inputContainer}>
				<Text>Select a number</Text>
				<Input
					style={styles.input}
					blurOnSubmit
					autoCapitalize="none"
					autoCorrect={false}
					keyboardType="numeric"
					maxLength={2}
				/>
				<View style={styles.btnContainer}>
					<View style={styles.button}>
						<Button title="reset" onPress={() => { }} color={colors.accent}/>
					</View> 
					<View style={styles.button}>
						<Button title="Confirm" onPress={() => { }} color={colors.primary}/>
					</View> 
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
	button: {
		width: 90
	},
	input: {
		width: 80,
		textAlign: 'center'
	}
});

export default StartGameScreen;
