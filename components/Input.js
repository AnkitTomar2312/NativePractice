import React, {useState} from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';

const Input = () => {
  const [name, setName] = useState('');
  return (
    <View>
      <Text style={styles.textBox}>You name is {name}</Text>
      <TextInput
        style={styles.inputBox}
        placeholder="Enter your name"
        onChangeText={text => setName(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textBox: {
    fontSize: 30,
    fontFamily: 'Arial',
    padding: 15,
    backgroundColor: 'red',
    color: 'white',
    marginTop: 20,
    width: 300,
    textAlign: 'center',
    borderRadius: 10,
  },
  inputBox: {
    fontSize: 30,
    fontFamily: 'Arial',
    padding: 15,
    color: 'white',
    marginTop: 20,
    textAlign: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'green',
  },
});
export default Input;
