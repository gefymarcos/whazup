import React from 'react';
import { Button } from 'react-native';

export default props => (
  <Button 
    title={props.title}
    color={props.color}
    onPress={() => props.onPress}
  />
);
