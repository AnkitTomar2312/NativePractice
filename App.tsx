/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import Radio from './components/Radio';

function App(): React.JSX.Element {
  const [data, setDate] = useState(100);
  const fruit = () => {
    setDate(200);
    console.log('clicked');
  };
  return <Radio />;
}

export default App;
