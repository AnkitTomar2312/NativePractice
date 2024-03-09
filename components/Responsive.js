import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Responsive = () => {
  return (
    <View style={styles.main}>
      <View style={styles.Box1}>
        <View style={styles.InnerBox1}></View>
        <View style={styles.InnerBox1}></View>
        <View style={styles.InnerBox1}></View>
      </View>
      <View style={styles.Box2}></View>
      <View style={styles.Box3}></View>
    </View>
  );
};
const styles = StyleSheet.create({
  textBox: {
    fontSize: 30,
    fontFamily: 'Arial',
    padding: 15,
    backgroundColor: 'red',
    color: 'white',
    marginTop: 20,
    textAlign: 'center',
    borderRadius: 10,
  },
  main: {
    flex: 1,
  },
  Box1: {
    flex: 2,
    backgroundColor: 'red',
    flexDirection: 'row',
  },
  Box2: {
    flex: 1,
    backgroundColor: 'green',
  },
  Box3: {
    flex: 1,
    backgroundColor: 'blue',
  },
  InnerBox1: {
    flex: 1,
    margin: 10,
    backgroundColor: 'yellow',
  },
});

export default Responsive;
