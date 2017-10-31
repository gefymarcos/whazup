import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';

import Button from './commons/Button';

export default props => (
  <ImageBackground style={styles.background} source={require('../imgs/bg.jpg')}>
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Seja bem-vindo</Text>
        <Image 
          style={styles.img}
          source={require('../imgs/logo.png')}
        />
      </View>
      <View style={styles.footer}>
      <Button 
        title='Entrar'
        color='#3F51B5'
        onPress={() => false}
      />
      </View>
    </View>
  </ImageBackground>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: null
  },
  container: {
    flex: 1,
    padding: 15
  },
  main: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    marginTop: 10,
    color: '#fafafa',
    backgroundColor: 'transparent'
  },
  img: {
    flex: 1,
    width: 200,
    height: 200,
    resizeMode: 'center'
  },
  footer: {
    flex: 1
  }
});
