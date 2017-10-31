import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Login from './components/Login';
import NewUser from './components/NewUser';
import Welcome from './components/Welcome';

export default props => (
  <Router>
    <Scene key='root'>
      <Scene 
        key='login' 
        component={Login} 
        title='Login' 
      />
      <Scene 
        key='newUser' 
        component={NewUser} 
        title='Novo Usuário' 
      />
      <Scene
        key='welcome'
        component={Welcome}
        title='Bem Vindo'
        initial
      />
    </Scene>
  </Router>
);
