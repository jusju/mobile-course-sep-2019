import React, {useState} from 'react';
import { Alert, Button, TextInput, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [infotext, setInfoText] = useState("Guess a number between 1-100");
  const [guessNum, setGuessNum] = useState(0);

  guessPressed = () => {
    console.log(guessNum);
    let guessNumber = Math.floor(Math.random() * 100) + 1;
    setInfoText(guessNumber);
  } 

  return (
    <View style={styles.container}>
      <Text>{infotext}</Text>
      <TextInput
        keyboardType="numeric"
        style={{width:50, borderColor:'gray', borderWidth: 1}}
        onChangeText={(text) => setGuessNum(text)}
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
