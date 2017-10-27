import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Login from './components/Login';
import NewUser from './components/NewUser';

export default props => (
  <Router>
    <Scene key='root'>
      <Scene 
        key='login' 
        component={Login} 
        title='Login' 
        initial
      />
      <Scene 
        key='newUser' 
        component={NewUser} 
        title='Novo Usuário' 
      />
    </Scene>
  </Router>
);
