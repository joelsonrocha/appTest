import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './screens/Home';
import Videos from './screens/Videos';
import Toolbar from './components/Toolbar';
import VideoPlayer from './screens/VideoPlayer';
import Market from './screens/Market';

const Tab = createBottomTabNavigator();
const NavStack = createStackNavigator();
const Drawer = createDrawerNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home" tabBar={props => <Toolbar {...props} />}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Videos" component={VideosNav} />
        <Tab.Screen name="Market" component={MarketStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function VideosNav() {
  return (
    <NavStack.Navigator initialRouteName="Video">
      <NavStack.Screen name="Video" component={Videos} />
      <NavStack.Screen name="VideoPlayer" component={VideoPlayer} />
    </NavStack.Navigator>
  );
}

function MarketStack() {
  return (
    <Drawer.Navigator initialRouteName="market">
      <Drawer.Screen name="Market" component={Market} />
    </Drawer.Navigator>
  );
}

export default Routes;
