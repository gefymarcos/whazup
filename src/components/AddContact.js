import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import Button from '../components/commons/Button';
import { modifyAddContactEmail, addContact } from '../actions/app';
import ErrorMessage from '../components/commons/ErrorMessage';

class AddContact extends React.Component {

  renderAddContact() {
    if (!this.props.success) {
      return (
        <View style={styles.container}>
          <View style={styles.inputBox}>
            <TextInput
              placeholder='E-mail'
              style={styles.textInput}
              onChangeText={(text) => this.props.modifyAddContactEmail(text)}
              value={this.props.addContactEmail}
            />
          </View>

          <View style={styles.buttonBox}>
            <Button 
              title='Adicionar'
              color='#3F51B5'
              onPress={() => this.props.addContact(this.props.addContactEmail)}
            />
            <ErrorMessage 
              error={this.props.error} 
            />
          </View>
        </View>      
      );
    }
    return (
      <View>
        <Text style={styles.textSuccess}>
          Cadastro realizado com sucesso!
        </Text>
      </View>
    ); 
  }

  render() {
      return (
        <View style={styles.container}>
          {this.renderAddContact()}
        </View>
    );
  }
}

const mapStateToProps = state => (
  {
    addContactEmail: state.app.addContactEmail,
    error: state.app.errorAddContact,
    success: state.app.successAddContact
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
  }, 
  textSuccess: {
    fontSize: 20,
    justifyContent: 'center',
  }
});
