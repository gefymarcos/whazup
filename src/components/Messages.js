import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Image, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';

import { modifyMessage, sendMessage } from '../actions/app';

class Messages extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.stage}>
        
        </View>
        <View style={styles.inputArea}>
          <TextInput
            style={styles.textInput}
            value={this.props.message}
            onChangeText={text => this.props.modifyMessage(text)}
          />
          <TouchableHighlight
            onPress={() => this.props.sendMessage(this.props.message)}
            underlayColor='#fafafa'
            style={styles.button}
          >
            <Image 
              source={require('../imgs/send.png')}
            />
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return ({
    message: state.app.message
  });
};

export default connect(mapStateToProps, { modifyMessage, sendMessage })(Messages);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee4dc',
    padding: 10
  },
  stage: {
    flex: 1,
    paddingBottom: 20
  },
  inputArea: {
    height: 70,
    flexDirection: 'row'
  },
  textInput: {
    flex: 4,
    backgroundColor: '#fafafa',
    fontSize: 18,
    marginRight: 10
  },
  button: {
    flex: 1,
    backgroundColor: '#3F51B5',
    borderRadius: 200,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
