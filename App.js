import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './src/screens/home';
import Videos from './src/screens/videos';
import Icon from 'react-native-vector-icons/FontAwesome';
import Toolbar from './src/components/Toolbar';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  const stackConfig = initialRouteName => ({
    defaulNavigationOptions: {
      header: null
    },
    initialRouteName,
    headerMode: 'screen'
  });
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

export default App;
