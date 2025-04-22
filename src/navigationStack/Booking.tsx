import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ServiceBookingScreen from '../Screens/ServiceBookingScreen';
import OptScreen from '../Screens/otp/OptScreen';
import VerifiedScreen from '../Screens/otp/VerifiedScreen';

type Props = {};

const Stack = createNativeStackNavigator();

const Booking = (props: Props) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="ServiceBookingScreen"
        component={ServiceBookingScreen}
      />
      <Stack.Screen name="OTP" component={OptScreen} />
      <Stack.Screen name="Verify" component={VerifiedScreen} />
    </Stack.Navigator>
  );
};

export default Booking;
