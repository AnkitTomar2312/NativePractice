/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import InputComponent from './components/Input';
import MapFunction from './components/MapFunction';
import Sectionlist from './components/SectionList';

function App(): React.JSX.Element {
  const [data, setDate] = useState(100);
  const fruit = () => {
    setDate(200);
    console.log('clicked');
  };
  return (
    <View>
      {/* <Text style={styles.textBox}>{data}</Text>
      <Text style={styles.textBox}>Hello React Native</Text>
      <Button title="Press Here" color={'green'} onPress={fruit} />
      <InputComponent /> */}
      {/* <MapFunction /> */}
      <Sectionlist />
    </View>
  );
}

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
});

export default App;
