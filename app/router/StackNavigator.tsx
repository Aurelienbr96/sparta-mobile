import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {withGradientBackground} from '../layout';
import {LoginPage} from '../screens/LoginPage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {BottomTabNavigator} from './BottomTabNavigator';

const Stack = createNativeStackNavigator();

export function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          fullScreenGestureEnabled: true,
        }}>
        <Stack.Screen
          name="Home"
          component={withGradientBackground(LoginPage)}
        />
        <Stack.Screen name="Dashboard" component={BottomTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
