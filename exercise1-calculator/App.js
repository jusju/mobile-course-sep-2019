import React, {useState} from 'react';
import { Alert, StyleSheet, Button, Text, TextInput, View } from 'react-native';

export default function App() {
  const [numA, setNumA] = useState(0);
  const [numB, setNumB] = useState(0);
  const [result, setResult] = useState(0);

  const addingButtonPressed = () => {
    const sum = parseFloat(numA) + parseFloat(numB);
    console.log(sum);
    setResult(sum);
  }
  const deductButtonPressed = () => {
    const sub = parseFloat(numA) - parseFloat(numB);
    console.log("deductButtonPressed");
    setResult(sub);
  }

  return (
    <View style={styles.container}>
      <View style={styles.container}></View>
      <View style={styles.container}>
        <Text>Result: {result} </Text>
        <TextInput
          keyboardType="numeric"
          style={{width:200, borderColor:'gray',  borderWidth: 1}}
          onChangeText={numA => setNumA(numA)}
          value={String(numA)}
        />
        <TextInput
          keyboardType="numeric"
          style={{width:200, borderColor:'gray',  borderWidth: 1}}
          onChangeText={numB => setNumB(numB)}
          value={String(numB)}
        />
        <View style={styles.buttoncontainer}>
          <Button title="+" onPress={addingButtonPressed}/>
          <Button title="-" onPress={deductButtonPressed}/>
        </View>
      </View>
      <View style={styles.container}>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  buttoncontainer: {
    flex: 2,
    width: 150,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    padding: 20,
  },
});
