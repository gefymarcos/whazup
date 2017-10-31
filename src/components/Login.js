import React, { Component } from 'react';
import { 
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  ImageBackground,
  ActivityIndicator
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { modifyEmail, modifyPassword, authUser } from '../actions/auth';
import Button from './commons/Button';

class Login extends Component {
  _authUser() {
    const { email, senha } = this.props;
    this.props.authUser({ email, senha });
  }

  renderBtn() {
    if(this.props.authLoading){
      return (
        <ActivityIndicator />
      )
    }
    return(
      <Button
        title='Entrar' 
        color='#3F51B5'
        onPress={() => this._authUser()}
      />
    );
  }

  render() {
    return (
      <ImageBackground style={styles.background} source={require('../imgs/bg.jpg')}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Whazup!</Text>
          </View>
          <View style={styles.principal}>
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
            <Text style={styles.errorMessage}>
              {this.props.error}
            </Text>
          </View>
          <View style={styles.footer}>
            {this.renderBtn()}
          </View>
          <View>
            <TouchableHighlight onPress={() => Actions.newUser()}>
              <Text style={styles.footerText}>Cadastre-se no Whazup!</Text>
            </TouchableHighlight>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => (
  {
    email: state.auth.email,
    senha: state.auth.senha,
    error: state.auth.authError,
    authLoading: state.auth.authLoading
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
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerTitle: {
    fontSize: 25,
    backgroundColor: 'transparent',
    color: '#fafafa'
  },
  principal: {
    flex: 3,
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
    flex: 2,
  },
  footerText: {
    fontSize: 18,
    alignSelf: 'center',
    color: '#fafafa',
  },
  errorMessage: {
    fontSize: 20,
    backgroundColor: 'transparent',
    color: '#ff4444',
    paddingTop: 10,
    fontWeight: '700'
  }
});

export default connect(mapStateToProps, 
  { 
    modifyEmail, 
    modifyPassword, 
    authUser 
  }
)(Login);
