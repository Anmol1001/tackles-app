import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../Screens/HomeScreen';
import ContactScreen from '../Screens/ContactScreen';

type Props = {};

const RootStack = createNativeStackNavigator();

const Navigation = (props: Props) => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        <RootStack.Screen name="HomeScreen" component={HomeScreen} />
        <RootStack.Screen name="Contact" component={ContactScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
