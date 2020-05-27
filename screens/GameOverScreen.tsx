import React, { FunctionComponent } from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

type TGameOverScreen = {
	roundsNumber: number;
	userNumber?: number | null;
	onStartNewGame(): void;
};

const GameOverScreen: FunctionComponent<TGameOverScreen> = (props) => {
	return (
		<View style={styles.screen}>
			<Text>The Game is over</Text>
			<Image source={require('../assets/success.png')}/>
			<Text>Number of rounds: {props.roundsNumber}</Text>
			<Text>Number was: {props.userNumber}</Text>
			<Button title="New Game" onPress={props.onStartNewGame} />
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default GameOverScreen;
