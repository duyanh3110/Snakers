import React from 'react';
import { StyleSheet } from 'react-native';
import { Router, Stack, Scene } from 'react-native-router-flux';

import Login from './pages/Login';
import Signup from './pages/Signup';
import HomePage from '../Pages/HomePage';
import Menu from '../screens/Menu';
import Basket from '../screens/Basket';
import User from '../screens/User';
import Feedback from '../screens/Feedback';

import Burger from '../screens/Burger';
import Pizza from '../screens/Pizza';
import Dessert from '../screens/Dessert';
import Drink from '../screens/Drink';

import BurgerInfo from '../screens/BurgerInfo';

export default class Routes extends React.Component {
  render() {
    return (
      <Router>
      <Stack key="root">
        <Scene key="signin" hideNavBar='true' component={Login} title="LOGIN"/>
        <Scene key="signup" hideNavBar='true' component={Signup} title="NEW ACCOUNT"/>
        <Scene key="home" hideNavBar='true' component={HomePage} title="HOME PAGE"/>
        <Scene key="menu" hideNavBar='true' component={Menu} title="MENU PAGE"/>
        <Scene key="basket" hideNavBar='true' component={Basket} title="BASKET PAGE"/>
        <Scene key="user" hideNavBar='true' component={User} title="USER PAGE"/>
        <Scene key="feedback" hideNavBar='true' component={Feedback} title="FEEDBACK PAGE"/>

        <Scene key="burger" hideNavBar='true' component={Burger} title="BURGER PAGE"/>
        <Scene key="pizza" hideNavBar='true' component={Pizza} title="PIZZA PAGE"/>
        <Scene key="dessert" hideNavBar='true' component={Dessert} title="DESSERT PAGE"/>
        <Scene key="drink" hideNavBar='true' component={Drink} title="DRINK PAGE"/>

        <Scene key="modalDetail" hideNavBar='true' component={BurgerInfo} title="MODAL DETAIL"/>
      </Stack>
    </Router>
    );
  }
}
