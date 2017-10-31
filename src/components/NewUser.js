import React, { Component } from 'react';
import { 
  View,
  TextInput,
  StyleSheet,
  ImageBackground
} from 'react-native';
import { connect } from 'react-redux';
import { 
  modifyEmail, 
  modifyPassword, 
  modifyName, 
  addUser 
} from '../actions/auth';

import Button from './commons/Button';

class NewUser extends Component {

  _addUser() {
    const { nome, email, senha } = this.props;
    this.props.addUser({ nome, email, senha });
  }

  render() {
    return (
      <ImageBackground style={styles.background} source={require('../imgs/bg.jpg')}>
        <View style={styles.container}>
          <View style={styles.principal}>
            <TextInput
              style={styles.input}
              placeholder='Nome'
              placeholderTextColor={'#dcdcdc'}
              value={this.props.nome}
              onChangeText={text => this.props.modifyName(text)}
            />
            <TextInput 
              style={styles.input} 
              placeholder='E-mail' 
              placeholderTextColor={'#dcdcdc'}
              value={this.props.email}
              onChangeText={text => this.props.modifyEmail(text)}
            />
            <TextInput 
              style={styles.input} 
              secureTextEntry
              placeholder='Senha' 
              placeholderTextColor={'#dcdcdc'}
              value={this.props.senha}
              onChangeText={text => this.props.modifyPassword(text)}
            />
            <TextInput 
              style={styles.input} 
              secureTextEntry
              placeholder='Confirmar Senha' 
              placeholderTextColor={'#dcdcdc'}
              value={this.props.senha}
            />
          </View>
          <View style={styles.footer}>
            <Button 
              title='Cadastrar'
              color='#3F51B5'
              onPress={() => this._addUser()}
            />
          </View>
        </View>
      </ImageBackground>
    );
  }
}

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

export default connect(
  mapStateToProps, 
  {
    modifyEmail, 
    modifyPassword, 
    modifyName, 
    addUser
  }
)(NewUser);
