import React, {Component} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import Students from './Student';

class App extends Component {
  render() {
    fruit = () => {
      console.log('Apple');
    };
    return (
      <View>
        <Text style={styles.heading}>Class Component</Text>
        <TextInput
          style={{padding: 20, backgroundColor: 'silver'}}
          placeholder="Enter Your name"
        />
        <Button title="login" onPress={this.fruit} />
        <Students />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textBox: {
    fontSize: 30,
    fontFamily: 'Arial',
    padding: 15,
    backgroundColor: 'blue',
    color: 'white',
    marginTop: 20,
    textAlign: 'center',
    borderRadius: 10,
  },
  heading: {
    fontSize: 48,
    textAlign: 'center',
    color: 'red',
  },
  info: {
    color: 'purple',
    fontSize: 28,
    textAlign: 'center',
  },
});

export default App;
