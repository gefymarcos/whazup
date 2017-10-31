import React from 'react';
import { Button, View } from 'react-native';

export default props => (
  <View style={{ backgroundColor: props.color }}>
    <Button 
      title={props.title}
      color='#fafafa'
      onPress={() => props.onPress()}
    />
  </View>
);
