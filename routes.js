import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './src/screens/home';
import Videos from './src/screens/videos';
import Toolbar from './src/components/Toolbar';

const Tab = createBottomTabNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        tabBar={props => <Toolbar {...props} />}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Videos" component={Videos} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
