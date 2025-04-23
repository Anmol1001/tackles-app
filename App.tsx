import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import SplashScreen from './src/Screens/SplashScreen';
import HomeScreen from './src/Screens/HomeScreen';
import Navigation from './src/navigationStack/Navigation';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/navigationStack/RootNavigator';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

type Props = {};

const App = (props: Props) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}>
        <Provider store={store}>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </Provider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
