import React from 'react';
import {Text, View, ActivityIndicator} from 'react-native';

const ActivityIndicators = () => {
  return (
    <View>
      <ActivityIndicator size="large" color="red" animating={true} />
    </View>
  );
};

export default ActivityIndicators;
