import React, { useState, FunctionComponent } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';

type TGameScreenProps = { 
    userChoice: number
}

const generateRandomNumber = (min: number, max: number, exclude: number): number => {
    min = Math.ceil(min);
    max = Math.ceil(max);
    const rndNum = Math.floor(Math.random() * (max - min) + min);
    if ( rndNum === exclude ) {
        return generateRandomNumber(min, max, exclude);
    }

    return rndNum;
}

const GameScreen: FunctionComponent<TGameScreenProps> = (props) => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomNumber(1, 100, props.userChoice))
    return (
		<View style={styles.screen}>
            <Text>Opponent's guess</Text>
            <NumberContainer>
                {currentGuess}
            </NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title="LOWER" onPress={() => {}}/>
                <Button title="GREATER" onPress={() => {}}/>
            </Card>
		</View>
	);
}

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
        maxWidth: '80%'
    }
});

export default GameScreen;