import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

// we need a way to switch between screens

function App() {
	const [userNumber, setUserNumber] = useState<number>();

	const startGameHandler = (selectedNumber: number): void => {
		setUserNumber(selectedNumber);
	};

	let content = <StartGameScreen onStartGame={startGameHandler} />;

	if (userNumber) {
    content = <GameScreen userChoice={userNumber}/>;
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
