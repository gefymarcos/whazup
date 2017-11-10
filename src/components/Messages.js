import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Image, TouchableHighlight, ListView } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';

import { modifyMessage, sendMessage, userTalkFetch } from '../actions/app';
import MessageBox from './commons/messageBox';

class Messages extends Component {

  componentWillMount() {
    this.props.userTalkFetch(this.props.contactEmail);
    this.createData(this.props.talk);
  }

  componentWillReceiveProps(nextProps) {
    this.createData(nextProps.talk);
  }

  createData(talk) {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r2 !== r1 });
    this.dataSource = ds.cloneWithRows(talk);
  }

  _sendMessage() {
    const { message, contactName, contactEmail } = this.props;
    this.props.sendMessage(message, contactName, contactEmail);
  }

  renderRow(text) {
    return (
      <MessageBox 
        message={text.message}
        type={text.type}
      />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.stage}>
          <ListView 
            enableEmptySections
            dataSource={this.dataSource}
            renderRow={this.renderRow}
          />
        </View>
        <View style={styles.inputArea}>
          <TextInput
            style={styles.textInput}
            value={this.props.message}
            onChangeText={text => this.props.modifyMessage(text)}
          />
          <TouchableHighlight
            onPress={this._sendMessage.bind(this)}
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

  const talk = _.map(state.talks, (val, uid) => {
    return { ...val, uid };
  });

  return ({
    talk,
    message: state.app.message
  });
};

export default connect(mapStateToProps, { modifyMessage, sendMessage, userTalkFetch })(Messages);

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
