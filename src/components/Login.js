import React from 'react';
import { 
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  ImageBackground
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { modifyEmail, modifyPassword } from '../actions/auth';
import Button from './commons/Button';

const Login = props => {
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
        </View>
        <View style={styles.footer}>
          <Button
            title='Entrar' 
            color='#3F51B5'
          />
        </View>
        <View>
          <TouchableHighlight onPress={() => Actions.newUser()}>
            <Text style={styles.footerText}>Cadastre-se no Whazup!</Text>
          </TouchableHighlight>
        </View>
      </View>
    </ImageBackground>
  );
};

const mapStateToProps = state => (
  {
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
  }
});

export default connect(mapStateToProps, { modifyEmail, modifyPassword })(Login);
