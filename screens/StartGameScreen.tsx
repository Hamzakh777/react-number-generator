import React, { useState, FunctionComponent } from 'react';
import {
	View,
	StyleSheet,
	Text,
	Button,
	TouchableWithoutFeedback,
	Keyboard,
	Alert,
} from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import BaseButton from '../components/BaseButton';
import colors from '../constants/colors';

type TStartGameScreen = {
	onStartGame(number: number): void
}

const StartGameScreen: FunctionComponent<TStartGameScreen> = (props) => {
	const [enteredValue, setEnteredValue] = useState('');
	const [confirmed, setConfirmed] = useState(false);
	const [selectedNumber, setSelectedNumber] = useState<number>(0);
	const numberInputHandler = (text: string): void => {
		setEnteredValue(text.replace(/[^0-9]/g, ''));
	};

	const resetInputHandler = () => {
		setConfirmed(false);
		setEnteredValue('');
	};

	const confirmInputHandler = () => {
		const chosenNumber = parseInt(enteredValue);
		if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
			Alert.alert(
				'Invalid number',
				'A number has to be between 1 and 99',
				[
					{
						text: 'Okay',
						style: 'destructive',
						onPress: resetInputHandler,
					},
				]
			);
			return;
		}

		setConfirmed(true);
		setSelectedNumber(chosenNumber);
		setEnteredValue('');
		Keyboard.dismiss();
	};

	let confirmedOutput;
	if (confirmed) {
		// console.log
		confirmedOutput = (
			<Card style={styles.summaryCard}>
				<Text style={styles.summaryCardText}>You Selected</Text>
				<NumberContainer>{selectedNumber}</NumberContainer>
				<BaseButton
					onPress={() => props.onStartGame(selectedNumber)}
				>
					START GAME
				</BaseButton>
			</Card>
		);
	}

	return (
		// on IOS clicking outside the input to close the
		// keyboard doesn't work, so we use touchablewithoutfeedback
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View style={styles.container}>
				<Text style={styles.title}>Start a new game!</Text>
				<Card style={styles.inputContainer}>
					<Text>Select a number</Text>
					<Input
						style={styles.input}
						blurOnSubmit
						autoCapitalize="none"
						autoCorrect={false}
						keyboardType="number-pad"
						maxLength={2}
						onChangeText={numberInputHandler}
						value={enteredValue}
					/>
					<View style={styles.btnContainer}>
						<View style={styles.button}>
							<Button
								title="reset"
								onPress={resetInputHandler}
								color={colors.accent}
							/>
						</View>
						<View style={styles.button}>
							<Button
								title="Confirm"
								onPress={confirmInputHandler}
								color={colors.primary}
							/>
						</View>
					</View>
				</Card>
				{confirmedOutput}
			</View>
		</TouchableWithoutFeedback>
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
		width: '80%',
        minWidth: 300,
        maxWidth: '95%',
		padding: 20,
	},
	title: {
		marginVertical: 10,
		fontSize: 20,
		fontFamily: 'open-sans-bold',
	},
	button: {
		width: 90,
	},
	input: {
		width: 80,
		textAlign: 'center',
	},
	summaryCard: {
		alignItems: 'center',
		justifyContent: 'center',
		width: 300,
		padding: 20,
		marginTop: 20
	},
	summaryCardText: {
		textAlign: 'center'
	}
});

export default StartGameScreen;
