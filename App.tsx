import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import StartGagmeScreen from './screens/StartGameScreen';

function App() {
  return (
    <View style={styles.container}>
      <Header title="Guess a number" />  
      <StartGagmeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

export default App;
