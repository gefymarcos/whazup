import React from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Actions } from 'react-native-router-flux';
import { chatsUserFetch } from '../actions/app';
import ListViewTalks from '../components/commons/ListViewTalks';

class Talks extends React.Component {
  componentWillMount() {
    this.props.chatsUserFetch();
    this.createData(this.props.talks);
  }

  componentWillReceiveProps(nextProps) {
    this.createData(nextProps.talks);
  }

  createData(talks) {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r2 !== r1 });
    this.dataSource = ds.cloneWithRows(talks);
  }

  renderRow(talk) {
    return (
      <ListViewTalks
        title={talk.nome}
        onPress={() => Actions.messages({ title: talk.nome, contactName: talk.nome, contactEmail: talk.email })}
      />
    );
  }

  render() {
    return (
      <ListView 
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}
  
const mapStateToProps = state => {
  const talks = _.map(state.listTalks, (val, uid) => {
    return { ...val, uid };
  });

  return {
    talks
  };
};

export default connect(mapStateToProps, { chatsUserFetch })(Talks);
