import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './src/screens/home';
import Videos from './src/screens/videos';
import Toolbar from './src/components/Toolbar';
import VideoPlayer from './src/screens/videoPlayer';

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
