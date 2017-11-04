import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchContactsUser } from '../actions/app';

class Contacts extends Component {

  componentWillMount() {
    this.props.fetchContactsUser();
    this.createData(this.props.contacts);
  }

  componentWillReceiveProps(nextProps) {
    this.createData(nextProps.contacts);
  }

  createData(contacts) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.data = ds.cloneWithRows(contacts); 
  }

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.data}
        renderRow={data => 
          <View>
            <Text>{data.nome}</Text>
            <Text>{data.email}</Text>
          </View>
        }
      />
    );
  }
}

const mapStateToProps = state => {
  const contacts = _.map(state.contacts, (val, uid) => {
    return { ...val, uid };
  });
  return {
    contacts
  };
};

export default connect(mapStateToProps, { fetchContactsUser })(Contacts);
