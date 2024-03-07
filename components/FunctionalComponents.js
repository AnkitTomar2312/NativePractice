import React, {Component, useEffect, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {create} from 'react-test-renderer';

const FunctionalComponents = () => {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);

  let counter = setTimeout(() => {
    setCount(count + 1);
  }, 1000);

  useEffect(() => {
    console.warn('Component  mounted');
  }, [count]);

  const stopTimer = () => {
    console.warn('Component unmounted');
    clearInterval(counter);
  };
  return (
    <View>
      <Text style={styles.title}>Functional Components {count}</Text>
      {show && <User />}
      <Button
        title="Update count"
        onPress={() => {
          stopTimer();
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
