import { View, Text } from 'react-native';
import React from 'react';
import { windowHeight, windowWidth } from '../utilities';
import * as Progress from 'react-native-progress';

export default function Loading() {
  return (
    <View
      style={{ width: windowWidth, height: windowHeight }}
      className="absolute flex-row justify-center items-center"
    >
      <Progress.Circle size={160} borderWidth={12} color="#cc9900" indeterminate />
    </View>
  );
}
