import React from 'react';
import { StyleSheet } from 'react-native';
import { Router, Stack, Scene } from 'react-native-router-flux';

import Login from './pages/Login';
import Signup from './pages/Signup';
import HomePage from '../Pages/HomePage';
import MenuPage from '../Pages/MenuPage';
import Basket from '../screens/Basket';
import User from '../screens/User';
import Feedback from '../screens/Feedback';

import BurgerInfo from '../screens/BurgerInfo';

export default class Routes extends React.Component {
  render() {
    return (
      <Router>
      <Stack key="root">
        <Scene key="signin" hideNavBar='true' component={Login} title="LOGIN"/>
        <Scene key="signup" hideNavBar='true' component={Signup} title="NEW ACCOUNT"/>
        <Scene key="home" hideNavBar='true' component={HomePage} title="HOME PAGE"/>
        <Scene key="menu" hideNavBar='true' component={MenuPage} title="MENU PAGE"/>
        <Scene key="basket" hideNavBar='true' component={Basket} title="BASKET PAGE"/>
        <Scene key="user" hideNavBar='true' component={User} title="USER PAGE"/>
        <Scene key="feedback" hideNavBar='true' component={Feedback} title="FEEDBACK PAGE"/>

        <Scene key="modalDetail" hideNavBar='true' component={BurgerInfo} title="MODAL DETAIL"/>
      </Stack>
    </Router>
    );
  }
}
