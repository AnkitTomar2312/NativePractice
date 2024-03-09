/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import Responsive from './components/Responsive';

function App(): React.JSX.Element {
  const [data, setDate] = useState(100);
  const fruit = () => {
    setDate(200);
    console.log('clicked');
  };
  return <Responsive />;
}

export default App;
