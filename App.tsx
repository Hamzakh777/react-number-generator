import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

function App() {
	const [userNumber, setUserNumber] = useState<number>();
	const [guessRounds, setGuessRounds] = useState<number>(0);

	const startGameHandler = (selectedNumber: number): void => {
		setUserNumber(selectedNumber);
		setGuessRounds(0);
	};

	const gameOverHandler = (numOfRounds: number): void => {
		setGuessRounds(numOfRounds);
	}

	let content = <StartGameScreen onStartGame={startGameHandler} />;

	if (userNumber && guessRounds === 0) {
		content = (
			<GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
		);
	} else if (guessRounds > 0) {
		content = <GameOverScreen />
	}

	return (
		<View style={styles.container}>
			<Header title="Guess a number" />
			{content}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default App;
