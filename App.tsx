import { StatusBar } from 'expo-status-bar';
import React, { useState, useReducer } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/js/Header'
import StartGameScreen from './components/js/StartGameScreen';
import GameScreen from './components/js/GameScreen';
import GameOverScreen from './screens/GameOverScreen'


export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const configureNewGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };

  const startGameHandler = (selectedNumber) => {setUserNumber(selectedNumber)};
  setGuessRounds(0);

  const gameOverHandler = numOfRounds => {
    setGuessRounds(numOfRounds);
  }

  let content = <StartGameScreen onStartGame={startGameHandler} />

  if (userNumber && guessRounds <= 0) {
    content =  <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />;
  } else if (guessRounds > 0) {
    content =<GameOverScreen roundsNumber={guessRounds} userNumber={userNumber}  onRestart={gameOverHandler} />
  }
  return (
    <View style = {styles.screen}>
      <Header title="Guess a Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});