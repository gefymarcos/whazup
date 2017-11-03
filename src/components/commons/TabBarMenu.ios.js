import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { TabBar } from 'react-native-tab-view';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { newIncludeContact } from '../../actions/app';

const TabBarMenu = props => (
  <View style={styles.container}>
    <TabBar 
      {...props} 
      style={styles.tabs} 
      indicatorStyle={{ height: 0 }}
    />
    <View style={styles.addUser}>
      <TouchableHighlight 
        onPress={() => { 
          Actions.addContact(); 
          props.newIncludeContact();
        }}
        underlayColor='#2b387c'
      >
        <Image source={require('../../imgs/addUser.png')} />

      </TouchableHighlight>
    </View>
    <View style={styles.exit}>
      <Image style={styles.exitImg} source={require('../../imgs/exit.png')} />
    </View>
  </View>
);

export default connect(null, { newIncludeContact })(TabBarMenu);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3F51B5',
    flexDirection: 'row',
    flex: 0.1,
  },
  tabs: {
    backgroundColor: '#3F51B5',
    flex: 6.5,
    justifyContent: 'center',
  },
  addUser: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  exit: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  exitTitle: {
    color: '#fafafa',
    fontSize: 14,
  },
  exitImg: {
    width: 25,
    height: 25
  }
});
