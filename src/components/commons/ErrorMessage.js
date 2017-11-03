import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default props => (
  <Text style={styles.errorMessage}>
    {props.error}
  </Text>
);

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 20,
    backgroundColor: 'transparent',
    color: '#ff4444',
    paddingTop: 10,
    fontWeight: '700'
  }
});
