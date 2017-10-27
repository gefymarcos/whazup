import React from 'react';
import { 
  View,
  TextInput,
  StyleSheet
} from 'react-native';

import Button from './commons/Button';

export default props => (
  <View style={styles.container}>
    <View style={styles.principal}>
      <TextInput style={styles.input} placeholder='Nome' />
      <TextInput style={styles.input} placeholder='E-mail' />
      <TextInput style={styles.input} placeholder='Senha' />
      <TextInput style={styles.input} placeholder='Confirmar Senha' />
    </View>
    <View style={styles.footer}>
      <Button 
        title='Cadastrar'
        color='#3F51B5'
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  principal: {
    flex: 4,
    justifyContent: 'center',
  },
  input: {
    fontSize: 20,
    height: 50,
  },
  footer: {
    flex: 1,
  },
  footerText: {
    fontSize: 18,
    alignSelf: 'center',
    marginTop: 180,
  }
});
