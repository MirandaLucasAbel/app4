import * as React from 'react';

import {
  View,
  StyleSheet,
  Text

} from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Constants from 'expo-constants';

import Menu from './pantallas/Menu'

const Stack = createNativeStackNavigator();
export default function App() {

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="login">
        <Stack.Screen
          name="Root"
          component={Menu}
          options={{ headerShown: false }}
        />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8
  }
});
