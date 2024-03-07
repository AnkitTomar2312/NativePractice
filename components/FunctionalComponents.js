import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {create} from 'react-test-renderer';

const FunctionalComponents = () => {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);
  useEffect(() => {
    console.warn('Count mounted');
  }, [count]);
  return (
    <View>
      <Text style={styles.title}>Functional Components {count}</Text>
      {show && <User />}
      <Button
        title="Update count"
        onPress={() => {
          setCount(count + 1);
          setShow(false);
        }}
      />
    </View>
  );
};

const User = () => {
  return (
    <View>
      <Text style={styles.title}>User Components</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 48,
    color: 'red',
    textAlign: 'center',
  },
});

export default FunctionalComponents;
