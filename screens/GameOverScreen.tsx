import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const GameOverScreen = (props: { roundsNumber: React.ReactNode; userNumber: React.ReactNode; onRestart: (ev: import("react-native").NativeSyntheticEvent<import("react-native").NativeTouchEvent>) => void; }) => {
  return (
    <View style={styles.screen}>
      <Text>The Game is Over!</Text>
      <Text>Number of rounds: {props.roundsNumber}</Text>
      <Text>Number was: {props.userNumber}</Text>
      <Button title="NEW GAME" onPress={props.onRestart} />
    </View>
  );
};


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center'
  }
});

export default GameOverScreen;