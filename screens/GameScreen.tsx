import React, { useState, useRef, FunctionComponent, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';

type TGameScreenProps = {
    userChoice: number;
    onGameOver(number: number): void
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
	const [currentGuess, setCurrentGuess] = useState(
		generateRandomNumber(1, 100, props.userChoice)
    );
    const [rounds, setRounds] = useState(0);

    // useEffect runs after every render cycle
    useEffect(() => {
		if (currentGuess === userChoice) {
			props.onGameOver(rounds);
		}
	}, [currentGuess, userChoice, onGameOver]);
    
    // useRef allows to save a value even if the component re-renders
    // also we don't want to re-render the component by changing something that
    // has nothing to do with the state
    const currentLow = useRef(1);
    const currentHigh = useRef(2);

	const nextGuessHandler = (direction: number): void => {
		if (
			(direction === Direction.lower &&
				currentGuess < userChoice) ||
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
            currentLow.current = currentGuess;
        }
        const nextNumber = generateRandomNumber(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        setRounds(currentRounds => currentRounds + 1);
	};

	return (
		<View style={styles.screen}>
			<Text>Opponent's guess</Text>
			<NumberContainer>{currentGuess}</NumberContainer>
			<Card style={styles.buttonContainer}>
				<Button
					title="LOWER"
					onPress={() => nextGuessHandler(Direction.lower)}
				/>
				<Button
					title="GREATER"
					onPress={() => nextGuessHandler(Direction.higher)}
				/>
			</Card>
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
});

export default GameScreen;
