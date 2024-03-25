import {ParamListBase} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

const GradientBackground = ({children}: {children: React.ReactNode}) => (
  <LinearGradient colors={['#6ABEA7', '#31584D']} style={styles.linearGradient}>
    {children}
  </LinearGradient>
);

export function withGradientBackground(
  ScreenComponent: ({
    navigation,
  }: {
    navigation: ParamListBase;
  }) => React.JSX.Element,
) {
  return function GradientScreen(
    props: React.JSX.IntrinsicAttributes & {navigation: ParamListBase},
  ) {
    return (
      <GradientBackground>
        <ScreenComponent {...props} />
      </GradientBackground>
    );
  };
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
});
