import React from 'react';
import { 
  View,
  TextInput,
  StyleSheet,
  ImageBackground
} from 'react-native';
import { connect } from 'react-redux';
import { modifyEmail, modifyPassword, modifyName } from '../actions/auth';

import Button from './commons/Button';

const NewUser = props => (
  <ImageBackground style={styles.background} source={require('../imgs/bg.jpg')}>
    <View style={styles.container}>
      <View style={styles.principal}>
        <TextInput
          style={styles.input}
          placeholder='Nome'
          placeholderTextColor={'#dcdcdc'}
          value={props.nome}
          onChangeText={text => props.modifyName(text)}
        />
        <TextInput 
          style={styles.input} 
          placeholder='E-mail' 
          placeholderTextColor={'#dcdcdc'}
          value={props.email}
          onChangeText={text => props.modifyEmail(text)}
        />
        <TextInput 
          style={styles.input} 
          secureTextEntry
          placeholder='Senha' 
          placeholderTextColor={'#dcdcdc'}
          value={props.senha}
          onChangeText={text => props.modifyPassword(text)}
        />
        <TextInput 
          style={styles.input} 
          secureTextEntry
          placeholder='Confirmar Senha' 
          placeholderTextColor={'#dcdcdc'}
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
  </ImageBackground>
);

const mapStateToProps = state => (
  {
    nome: state.auth.nome,
    email: state.auth.email,
    senha: state.auth.senha,
  }
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: null
  },
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
    color: '#fafafa',
    backgroundColor: 'rgba(100, 100, 140, 0.5)',
    marginTop: 5,
    padding: 15
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
