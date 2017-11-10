import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { SEND } from '../../actions/status';

export default props => {
  if (props.type === SEND) {
    return (
      <View style={styles.sendContainer}>
        <Text style={styles.sendMessage}>{props.message}</Text>
      </View>
    );  
  }
  return (
    <View style={styles.receiveContainer}>
      <Text style={styles.receiveMessage}>{props.message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sendContainer: {
    alignItems: 'flex-end',
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 50,
  },
  sendMessage: {
    fontSize: 18,
    color: '#000', 
    padding: 10,
    backgroundColor: '#9FA8DA',
    elevation: 1    
  },
  receiveContainer: {
    alignItems: 'flex-start',
    marginTop: 5,
    marginBottom: 5,
    marginRight: 50,
  },
  receiveMessage: {
    fontSize: 18,
    color: '#000', 
    padding: 10,
    backgroundColor: '#FAFAFA',
    elevation: 1    
  }
});
