import React from 'react';
import {Button, StyleSheet, Text, TouchableHighlight, View} from 'react-native';

const ButtonStyling = () => {
  return (
    <View style={styles.main}>
      <TouchableHighlight>
        <Text style={styles.button}> Button</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.button, styles.danger]}> Danger</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.button, styles.primary]}> Primary</Text>
      </TouchableHighlight>
      <Button title="yes" />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    margin: 15,
  },
  button: {
    backgroundColor: '#bbb',
    height: 48,
    margin: 15,
    borderRadius: 10,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 28,
    color: '#fff',
    shadowColor: '#000',
    elevation: 20,
  },
  primary: {
    backgroundColor: 'blue',
  },
  danger: {
    backgroundColor: 'red',
  },
});
export default ButtonStyling;
