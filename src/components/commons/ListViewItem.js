import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';

export default props => (
  <TouchableHighlight
    onPress={() => props.onPress()}
  >
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.subtitle}>{props.subtitle}</Text>
    </View>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#CCC'
  },
  title: {
    fontSize: 25,
  },
  subtitle: {
    fontSize: 16,
    marginLeft: 2,
    color: '#444'
  }
});
