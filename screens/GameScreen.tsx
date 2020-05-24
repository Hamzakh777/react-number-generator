import React, { useState, FunctionComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';

type TGameScreenProps { 
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
    return <View></View>
}

export default GameScreen;