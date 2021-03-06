import React, { FunctionComponent } from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import BaseButton from '../components/BaseButton';
import colors from '../constants/colors';

type TGameOverScreen = {
	roundsNumber: number;
	userNumber?: number | null;
	onStartNewGame(): void;
};

const GameOverScreen: FunctionComponent<TGameOverScreen> = (props) => {
	return (
		<View style={styles.screen}>
			<Text>The Game is over</Text>
			<View style={styles.imageContainer}>
				<Image
					style={styles.image}
					source={require('../assets/success.png')}
					// source={{
					// 	uri:
					// 		'https://www.yourdictionary.com/images/definitions/lg/12337.summit.jpg',
					// }}
					resizeMode="cover"
				/>
			</View>
			<Text>
				Number of rounds:{' '}
				<Text style={styles.highlight}>{props.roundsNumber}</Text>
			</Text>
			<Text>Number was: {props.userNumber}</Text>
			<BaseButton onPress={props.onStartNewGame}>New Game</BaseButton>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	image: {
		width: '100%',
		height: '100%',
	},
	imageContainer: {
		width: 300,
		height: 300,
		marginVertical: 30,
		borderRadius: 150,
		borderWidth: 3,
		borderColor: 'black',
		overflow: 'hidden',
	},
	highlight: {
		color: colors.primary
	},
});

export default GameOverScreen;
