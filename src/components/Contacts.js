import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Actions } from 'react-native-router-flux';
import { fetchContactsUser } from '../actions/app';
import ListViewItem from './commons/ListViewItem';

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

  renderRow(data) {
    return (
      <ListViewItem 
        title={data.nome}
        subtitle={data.email}
        onPress={() => Actions.messages({ title: data.nome, contactName: data.nome, contactEmail: data.email })}
      />
    );
  }

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.data}
        renderRow={this.renderRow}
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
