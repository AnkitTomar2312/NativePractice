import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const MapFunction = () => {
  const users = [
    {
      id: 1,
      name: 'User 1',
    },
    {
      id: 2,
      name: 'User 2',
    },
    {
      id: 3,
      name: 'User 3',
    },
    {
      id: 4,
      name: 'User 4',
    },
    {
      id: 5,
      name: 'User 5',
    },
  ];
  return (
    <View>
      <Text style={styles.heading}>MapFunction</Text>
      {users.map(item => {
        return (
          <Text style={styles.textBox} key={item.id}>
            {item.name}
          </Text>
        );
      })}
    </View>
  );
};

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
  },
});

export default MapFunction;
