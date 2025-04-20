import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import SplashScreen from './src/Screens/SplashScreen';
import HomeScreen from './src/Screens/HomeScreen';
import Navigation from './src/navigationStack/Navigation';

type Props = {};

const App = (props: Props) => {
  const [isSplash, setSplash] = useState(true);

  useEffect(() => {
    // Simulate a loading timeout before hiding the splash screen
    const timer = setTimeout(() => {
      setSplash(false);
    }, 3000); // Adjust duration as needed (e.g., 3000ms = 3 seconds)

    return () => clearTimeout(timer);
  }, []);
  return (
    <View style={{flex: 1}}>
      {isSplash ? <SplashScreen /> : <Navigation />}
    </View>
  );
};

export default App;
