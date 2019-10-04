import React, {useState} from 'react';
import { Alert, Button, TextInput, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [infotext, setInfoText] = useState("Guess a number between 1-100");
  const [guessNum, setGuessNum] = useState("");
  const [guessTimes, setGuessTimes] = useState(0);
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 100) + 1);

  guessPressed = () => {
    console.log(guessNum);
    if(parseInt(guessNum) > randomNumber) {
      setInfoText("You guess is too high");
      setGuessTimes(guessTimes+1);
    } else if(parseInt(guessNum) < randomNumber) {
      setInfoText("You guess is too low");
      setGuessTimes(guessTimes+1);
    } else {
      Alert.alert("You guessed the number in " + guessTimes + " guesses");
    }
  } 

  return (
    <View style={styles.container}>
      <Text>{infotext}</Text>
      <TextInput
        keyboardType="numeric"
        style={{width:50, borderColor:'gray', borderWidth: 1}}
        onChangeText={(guessNum) => setGuessNum(guessNum)}
        value={guessNum}
      />
      <Button onPress={guessPressed} title="Make Guess"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
