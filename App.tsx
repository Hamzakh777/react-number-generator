import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

const fetchFont = (): Promise<void> => {
	return Font.loadAsync({
		'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
		'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
	});
};

function App() {
	const [userNumber, setUserNumber] = useState<number | null>();
	const [guessRounds, setGuessRounds] = useState<number>(0);
	const [dataLoaded, setDataLoaded] = useState<boolean>(false);

	if (!dataLoaded) {
		return (
			<AppLoading
				startAsync={fetchFont}
				onFinish={() => setDataLoaded(true)}
				onError={(err) => console.log(err)}
			/>
		);
	}

	const startNewGameHandler = (): void => {
		setGuessRounds(0);
		setUserNumber(null);
	};

	const startGameHandler = (selectedNumber: number): void => {
		setUserNumber(selectedNumber);
		setGuessRounds(0);
	};

	const gameOverHandler = (numOfRounds: number): void => {
		setGuessRounds(numOfRounds);
	};

	let content = <StartGameScreen onStartGame={startGameHandler} />;

	if (userNumber && guessRounds === 0) {
		content = (
			<GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
		);
	} else if (guessRounds > 0) {
		content = (
			<GameOverScreen
				roundsNumber={guessRounds}
				userNumber={userNumber}
				onStartNewGame={startNewGameHandler}
			/>
		);
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
