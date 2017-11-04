import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchContactsUser } from '../actions/app';

class Contacts extends Component {

  constructor(props) {
    super(props);
    
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.state = {
      data: ds.cloneWithRows([
        'linha 1',
        'linha 2',
        'linha 3',
        'linha 4',
      ])}
  }

  componentWillMount() {
    this.props.fetchContactsUser();
  }

  render() {
    return (
      <ListView
        dataSource={this.state.data}
        renderRow={data => <View><Text>{data}</Text></View>}
      />
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
