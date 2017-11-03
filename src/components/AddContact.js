import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Button from '../components/commons/Button';
import { modifyAddContactEmail, addContact } from '../actions/app';
import ErrorMessage from '../components/commons/ErrorMessage';

const AddContact = props => (
  <View style={styles.container}>
    <View style={styles.inputBox}>
      <TextInput
        placeholder='E-mail'
        style={styles.textInput}
        onChangeText={(text) => props.modifyAddContactEmail(text)}
        value={props.addContactEmail}
      />
    </View>

    <View style={styles.buttonBox}>
      <Button 
        title='Adicionar'
        color='#3F51B5'
        onPress={() => props.addContact(props.addContactEmail)}
      />
      <ErrorMessage 
        error={props.error} 
      />
    </View>
  </View>
);

const mapStateToProps = state => (
  {
    addContactEmail: state.app.addContactEmail,
    error: state.app.errorAddContact
  }
);

export default connect(mapStateToProps, { modifyAddContactEmail, addContact })(AddContact);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10
  },
  inputBox: {
    flex: 1,
    justifyContent: 'center'
  },
  textInput: {
    fontSize: 20,
    height: 45
  },
  buttonBox: {
    flex: 1
  }
});
