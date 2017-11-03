import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import TabBarMenu from './commons/TabBarMenu';

import Contacts from './Contacts';
import Talks from './Talks';

export default class Main extends Component {
  state = {
    index: 0,
    routes: [
      { key: '1', title: 'Conversas' },
      { key: '2', title: 'Contatos' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => <TabBarMenu {...props} />;

  _renderScene = SceneMap({
    '1': Talks,
    '2': Contacts,
  });

  render() {
    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});