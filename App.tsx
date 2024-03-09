/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import ButtonStyling from './components/ButtonStyling';

function App(): React.JSX.Element {
  const [data, setDate] = useState(100);
  const fruit = () => {
    setDate(200);
    console.log('clicked');
  };
  return <ButtonStyling />;
}

export default App;
