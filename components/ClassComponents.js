import React, {Component} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import Students from './Student';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Anil',
      age: 20,
    };
  }
  updateName(val) {
    this.setState({name: val});
  }
  render() {
    return (
      <View>
        <Text style={styles.heading}>
          {this.state.name} {this.state.age}
        </Text>
        <TextInput
          style={{padding: 20, backgroundColor: 'silver'}}
          placeholder="Enter Your name"
          onChangeText={text => this.updateName(text)}
        />
        <Button title="login" onPress={this.fruit} />
        <Students name={this.state.name} />
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
