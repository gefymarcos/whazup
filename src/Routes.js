import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Login from './components/Login';
import NewUser from './components/NewUser';
import Welcome from './components/Welcome';
import Main from './components/Main';

export default props => (
  <Router 
    navigationBarStyle={{ backgroundColor: '#3F51B5' }}
    titleStyle={{ color: '#fafafa' }}
  >
    <Scene key='root'>
      <Scene 
        hideNavBar
        key='login' 
        component={Login} 
        title='Login' 
      />
      <Scene 
        hideNavBar={false}
        key='newUser' 
        component={NewUser} 
        title='Novo Usuário' 
      />
      <Scene
        hideNavBar
        key='welcome'
        component={Welcome}
        title='Bem Vindo'
      />
      <Scene
        hideNavBar
        key='main'
        component={Main}
        title='Whazup!'
        initial
      />
    </Scene>
  </Router>
);
