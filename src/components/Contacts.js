import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchContactsUser } from '../actions/app';

class Contacts extends Component {
  componentWillMount() {
    this.props.fetchContactsUser();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
      <Text>Contatos</Text>
    </View>
    );
  }
}

const mapStateToProps = state => {
  const contatos = _.map(state.contacts, (val, uid) => {
    return { ...val, uid };
  });
  console.log(contatos);
  return {};
};

export default connect(mapStateToProps, { fetchContactsUser })(Contacts);
