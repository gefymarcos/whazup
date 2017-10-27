import React from 'react';
import { 
  View,
  TextInput,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';

import Button from './commons/Button';

const NewUser = props => (
  <View style={styles.container}>
    <View style={styles.principal}>
      <TextInput
        style={styles.input}
        placeholder='Nome'
        value={props.nome}
      />
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
      <TextInput 
        style={styles.input} 
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

export default connect(mapStateToProps, null)(NewUser);
