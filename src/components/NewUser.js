import React from 'react';
import { 
  View,
  TextInput,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { modifyEmail, modifyPassword, modifyName } from '../actions/auth';

import Button from './commons/Button';

const NewUser = props => (
  <View style={styles.container}>
    <View style={styles.principal}>
      <TextInput
        style={styles.input}
        placeholder='Nome'
        value={props.nome}
        onChangeText={text => props.modifyName(text)}
      />
      <TextInput 
        style={styles.input} 
        placeholder='E-mail' 
        value={props.email}
        onChangeText={text => props.modifyEmail(text)}
      />
      <TextInput 
        style={styles.input} 
        secureTextEntry
        placeholder='Senha' 
        value={props.senha}
        onChangeText={text => props.modifyPassword(text)}
      />
      <TextInput 
        style={styles.input} 
        secureTextEntry
        placeholder='Confirmar Senha' 
        value={props.senha}
      />
    </View>
    <View style={styles.footer}>
      <Button 
        title='Cadastrar'
        color='#3F51B5'
      />
    </View>
  </View>
);

const mapStateToProps = state => (
  {
    nome: state.auth.nome,
    email: state.auth.email,
    senha: state.auth.senha,
  }
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

export default connect(mapStateToProps, { modifyEmail, modifyPassword, modifyName })(NewUser);
