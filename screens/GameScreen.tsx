import React, { useState, useRef, FunctionComponent, useEffect } from 'react';
import { View, Text, StyleSheet, Alert, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import NumberContainer from '../components/NumberContainer';
import BaseButton from '../components/BaseButton';
import Card from '../components/Card';

type TGameScreenProps = {
	userChoice: number;
	onGameOver(number: number): void;
};

enum Direction {
	lower,
	higher,
}

const generateRandomNumber = (
	min: number,
	max: number,
	exclude: number
): number => {
	min = Math.ceil(min);
	max = Math.ceil(max);
	const rndNum = Math.floor(Math.random() * (max - min) + min);
	if (rndNum === exclude) {
		return generateRandomNumber(min, max, exclude);
	}

	return rndNum;
};

const GameScreen: FunctionComponent<TGameScreenProps> = (props) => {
	const { userChoice, onGameOver } = props;
	const initialGuess = generateRandomNumber(1, 100, props.userChoice);
	const [currentGuess, setCurrentGuess] = useState(initialGuess);
	const [pastGuesses, setPastGuesses] = useState<Array<number>>([
		initialGuess,
	]);

	// useEffect runs after every render cycle
	useEffect(() => {
		if (currentGuess === userChoice) {
			props.onGameOver(pastGuesses.length);
		}
	}, [currentGuess, userChoice, onGameOver]);

	const renderListItem = (value: number): JSX.Element => {
		return (
			<View style={styles.listItem} key={value}>
				<Text>#</Text>
				<Text>{value}</Text>
			</View>
		);
	};

	// useRef allows to save a value even if the component re-renders
	// also we don't want to re-render the component by changing something that
	// has nothing to do with the state
	const currentLow = useRef(1);
	const currentHigh = useRef(2);

	const nextGuessHandler = (direction: number): void => {
		if (
			(direction === Direction.lower && currentGuess < userChoice) ||
			(direction === Direction.higher && currentGuess > userChoice)
		) {
			Alert.alert("Don't lie!!", 'You know that this is wrong....', [
				{ text: 'Sorry', style: 'cancel' },
			]);

			return;
		}
		// generate a new number
		if (direction === Direction.lower) {
			currentHigh.current = currentGuess;
		} else {
			currentLow.current = currentGuess + 1;
		}
		const nextNumber = generateRandomNumber(
			currentLow.current,
			currentHigh.current,
			currentGuess
		);
		setCurrentGuess(nextNumber);
		setPastGuesses((currentPastGuesses) => [
			nextNumber,
			...currentPastGuesses,
		]);
	};

	return (
		<View style={styles.screen}>
			<Text>Opponent's guess</Text>
			<NumberContainer>{currentGuess}</NumberContainer>
			<Card style={styles.buttonContainer}>
				<BaseButton onPress={() => nextGuessHandler(Direction.lower)}>
					<Ionicons name="md-remove" size={24} color="white" />
				</BaseButton>
				<BaseButton onPress={() => nextGuessHandler(Direction.higher)}>
					<Ionicons name="md-add" size={24} color="white" />
				</BaseButton>
			</Card>
			<View style={styles.listContainer}>
				<ScrollView contentContainerStyle={styles.list}>
					{pastGuesses.map((guess) => renderListItem(guess))}
				</ScrollView>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		alignItems: 'center',
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: 20,
		padding: 20,
		width: 300,
		maxWidth: '80%',
	},
	listItem: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginVertical: 10,
		padding: 15,
		borderColor: '#ccc',
		backgroundColor: 'white',
	},
	listContainer: {
		flex: 1,
		width: '80%',
	},
	list: {
		flexGrow: 1,
		alignItems: 'center',
		justifyContent: 'flex-end',
	},
});

export default GameScreen;
