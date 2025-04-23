import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ServiceBookingScreen from '../Screens/ServiceBookingScreen';
import OptScreen from '../Screens/otp/OptScreen';
import VerifiedScreen from '../Screens/otp/VerifiedScreen';
import HomeScreen from '../Screens/HomeScreen';
import FaqsScreen from '../Screens/FaqsScreen';
import FaqsSingle from '../FaqsSingle';

type Props = {};

const Stack = createNativeStackNavigator();

const Faqs = (props: Props) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="FaqsScreen" component={FaqsScreen} />
      <Stack.Screen name="FAQsSingle" component={FaqsSingle} />
    </Stack.Navigator>
  );
};

export default Faqs;
