import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './screens/Home';
import Videos from './screens/Videos';
import Toolbar from './components/Toolbar';
import VideoPlayer from './screens/VideoPlayer';

const Tab = createBottomTabNavigator();
const NavStack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home" tabBar={props => <Toolbar {...props} />}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Videos" component={VideosNav} />
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

export default Routes;
