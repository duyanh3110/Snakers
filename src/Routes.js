import React from 'react';
import { StyleSheet } from 'react-native';
import { Router, Stack, Scene } from 'react-native-router-flux';

import Login from './pages/Login';
import Signup from './pages/Signup';
import HomePage from '../Pages/HomePage';
import MenuPage from '../Pages/MenuPage';

export default class Routes extends React.Component {
  render() {
    return (
      <Router>
      <Stack key="root">
        <Scene key="signin" hideNavBar='true' component={Login} title="LOGIN"/>
        <Scene key="signup" hideNavBar='true' component={Signup} title="NEW ACCOUNT"/>
        <Scene key="home" hideNavBar='true' component={HomePage} title="HOME PAGE"/>
        <Scene key="menu" hideNavBar='true' component={MenuPage} title="MENU PAGE"/>
      </Stack>
    </Router>
    );
  }
}
