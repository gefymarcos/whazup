import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { TabBar } from 'react-native-tab-view';

export default props => (
  <View>
    <Text>Whazup!</Text>
    <TabBar {...props} />
  </View>
);
