import React, {useState} from 'react';
import {Button, StyleSheet, Text, View, Modal} from 'react-native';

const Modals = () => {
  const [showModal, setshowModal] = useState(false);
  return (
    <View style={styles.main}>
      <View>
        <Text style={{textAlign: 'center', fontSize: 48}}>Modal</Text>
      </View>
      <Modal transparent={true} visible={showModal} animationType="slide">
        <View style={styles.modalWrapper}>
          <View style={styles.modalText}>
            <Text style={{textAlign: 'center', fontSize: 18}}>
              This is Modal
            </Text>
            <Button
              title="Close Modal"
              onPress={() => {
                setshowModal(false);
              }}
            />
          </View>
        </View>
      </Modal>
      <View style={styles.OpenModalWrapper}>
        <Button
          title="Open Modal"
          onPress={() => {
            setshowModal(true);
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  OpenModalWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalText: {
    width: 200,
    maxHeight: 100,
    backgroundColor: 'white',
    shadowColor: 'black',
    elevation: 5,
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 12,
  },
});

export default Modals;
