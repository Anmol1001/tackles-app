import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import SplashScreen from './src/Screens/SplashScreen';
import HomeScreen from './src/Screens/HomeScreen';
import Navigation from './src/navigationStack/Navigation';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/navigationStack/RootNavigator';

type Props = {};

const App = (props: Props) => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default App;
