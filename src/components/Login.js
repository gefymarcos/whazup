import React from 'react';
import { 
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import Button from './commons/Button';

const Login = props => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Whazup!</Text>
      </View>
      <View style={styles.principal}>
        <TextInput 
          style={styles.input} 
          placeholder='E-mail' 
          value={props.email}
        />
        <TextInput 
          style={styles.input} 
          placeholder='Senha' 
          value={props.senha}
        />
      </View>
      <View style={styles.footer}>
        <Button
          title='Entrar' 
          color='#3F51B5'
        />
        <TouchableHighlight onPress={() => Actions.newUser()}>
          <Text style={styles.footerText}>Cadastre-se no Whazup!</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const mapStateToProps = state => (
  {
    email: state.auth.email,
    senha: state.auth.senha,
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerTitle: {
    fontSize: 25,
  },
  principal: {
    flex: 2,
    justifyContent: 'center',
  },
  input: {
    fontSize: 20,
    height: 50,

  },
  footer: {
    flex: 2,
  },
  footerText: {
    fontSize: 18,
    alignSelf: 'center',
    marginTop: 180,
  }
});

export default connect(mapStateToProps, null)(Login);
