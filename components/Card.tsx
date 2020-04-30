import React from 'react';
import { StyleSheet, View } from 'react-native';

const Card = (props: any) => {
    return (
        <View style={{... styles.card, ...props.style}}>
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
	card: {
		borderRadius: 8,
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 6,
		shadowOpacity: 0.26,
		elevation: 5,
		backgroundColor: 'white',
	},
});

export default Card;