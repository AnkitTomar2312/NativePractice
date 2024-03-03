/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {Text, View, Button} from 'react-native';

function App(): React.JSX.Element {
  const [data, setDate] = useState(100);
  const fruit = () => {
    setDate(600);
    console.log('clicked');
  };
  return (
    <View>
      <Text style={{fontSize: 60}}>{data}</Text>
      <Text style={{fontSize: 50, padding: 5}}>Hello React Native</Text>
      <Button title="Press Here" color={'green'} onPress={fruit} />
    </View>
  );
}

export default App;
