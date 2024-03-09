import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Radio = () => {
  const [selectRadio, setSelectRadio] = useState(0);
  return (
    <>
      <View style={styles.main}>
        <TouchableOpacity
          onPress={() => {
            setSelectRadio(1);
          }}>
          <View style={styles.radioWrapper}>
            <View style={styles.radio}>
              {selectRadio == 1 && <View style={styles.radioBg}></View>}
            </View>
            <Text style={styles.radioText}>Radio 1</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelectRadio(2);
          }}>
          <View style={styles.radioWrapper}>
            <View style={styles.radio}>
              {selectRadio == 2 && <View style={styles.radioBg}></View>}
            </View>
            <Text style={styles.radioText}>Radio 2</Text>
          </View>
        </TouchableOpacity>
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
