import {
  LoginScreen,
  MainScreen,
  SettingsScreen,
  MatchingScreen,
  MatchingDoneScreen,
} from './index';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default class Router extends React.Component {
  render() {
    return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={LoginScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Matching" component={MatchingScreen} />
        <Stack.Screen name="MatchingDone" component={MatchingDoneScreen} />
      </Stack.Navigator>
    );
  }
}
