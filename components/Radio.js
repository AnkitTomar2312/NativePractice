import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Radio = () => {
  const [selectRadio, setSelectRadio] = useState(1);
  const array = [
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
    {
      id: 6,
      name: 'User 6',
    },
  ];
  return (
    <>
      <View style={styles.main}>
        {array.map(item => {
          return (
            <TouchableOpacity
              key={item.id}
              onPress={() => {
                setSelectRadio(item.id);
              }}>
              <View style={styles.radioWrapper}>
                <View style={styles.radio}>
                  {selectRadio == item.id && (
                    <View style={styles.radioBg}></View>
                  )}
                </View>
                <Text style={styles.radioText}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioText: {
    fontSize: 30,
  },
  radio: {
    height: 40,
    width: 40,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 20,
    margin: 10,
  },
  radioWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioBg: {
    height: 28,
    width: 28,
    backgroundColor: 'blue',
    borderRadius: 20,
    margin: 4,
  },
});
export default Radio;
