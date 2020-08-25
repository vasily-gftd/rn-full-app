import { StatusBar } from 'expo-status-bar';
import React, { useState, useReducer } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header'
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen'


export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const configureNewGameHandler = (setUserNumber: React.SetStateAction<any>) => {
    setGuessRounds(0);
    setUserNumber(null);
  }

  const startGameHandler = (selectedNumber: React.SetStateAction<undefined>) => {setUserNumber(selectedNumber)};
  setGuessRounds(0);

  const gameOverHandler = (numOfRounds: React.SetStateAction<number>) => {
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
