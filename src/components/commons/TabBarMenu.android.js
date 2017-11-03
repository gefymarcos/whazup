import React from 'react';
import { View, Text, StatusBar, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { TabBar } from 'react-native-tab-view';
import { Actions } from 'react-native-router-flux'

export default props => (
  <View style={styles.container}>
    <StatusBar backgroundColor='#3F51B5'/>
    <View style={styles.headerBox}>
      <View style={styles.titleBox}>
        <Text style={styles.title}>Whazup!</Text>
      </View>
      
      <View style={styles.rightButtons}>
        <View style={styles.addUser}>
        <TouchableHighlight 
          onPress={() => Actions.addContact() }
          underlayColor='#2b387c'
        >
          <Image source={require('../../imgs/addUser.png')} />
        </TouchableHighlight>
        </View>
        <View>
          <Text style={styles.exit}>Sair</Text>
        </View>
      </View>
    </View>
    <TabBar {...props} 
      style={styles.tabs} 
      indicatorStyle={{backgroundColor: '#FAFAFA', height: 5}}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3F51B5',
    elevation: 4,
    marginBottom: 6
  },
  headerBox: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  titleBox: {
    height: 50,
    marginBottom: 30,
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    marginTop: 40,
    color: '#fafafa',
    marginLeft: 20
  },
  tabs: {
    backgroundColor: '#3F51B5',
  },
  addUser: {
    width: 60,
    alignItems: 'center'
  },
  rightButtons: {
    flexDirection: 'row',
    marginRight: 20,
    alignItems: 'center'
  },
  exit: {
    fontSize: 20,
    color: '#fafafa'
  }
});
