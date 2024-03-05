import React from 'react';
import {StyleSheet, Text, View, SectionList} from 'react-native';

const Sectionlist = () => {
  const users = [
    {
      id: 1,
      name: 'User 1',
      data: ['c++', 'Java', 'Redux'],
    },
    {
      id: 2,
      name: 'User 2',
      data: ['c++', 'Java', 'Redux'],
    },
    {
      id: 3,
      name: 'User 3',
      data: ['c++', 'Java', 'Redux'],
    },
    {
      id: 4,
      name: 'User 4',
      data: ['c++', 'Java', 'Redux'],
    },
    {
      id: 5,
      name: 'User 5',
      data: ['c++', 'Java', 'Redux'],
    },
  ];
  return (
    <View>
      <Text style={styles.heading}>Section List</Text>
      <SectionList
        sections={users}
        renderItem={({item}) => <Text style={styles.info}>{item}</Text>}
        renderSectionHeader={({section: {name}}) => (
          <Text style={styles.textBox}>{name}</Text>
        )}
      />
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
    textAlign: 'center',
    color: 'red',
  },
  info: {
    color: 'purple',
    fontSize: 28,
    textAlign: 'center',
  },
});

export default Sectionlist;
