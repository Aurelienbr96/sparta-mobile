import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DashboardPage} from '../screens/DashboardPage';
import {ExercisePage} from '../screens/ExercisePage';
import {TrainingPage} from '../screens/TrainingPage';
import {ProgramsPage} from '../screens/ProgramsPage';
import {withGradientBackground} from '../layout';

const Tab = createBottomTabNavigator();

export function BottomTabNavigator() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="DashboardHome"
        component={withGradientBackground(DashboardPage)}
      />
      <Tab.Screen
        name="Exercise"
        component={withGradientBackground(ExercisePage)}
      />
      <Tab.Screen
        name="Training"
        component={withGradientBackground(TrainingPage)}
      />
      <Tab.Screen
        name="Program"
        component={withGradientBackground(ProgramsPage)}
      />
    </Tab.Navigator>
  );
}
