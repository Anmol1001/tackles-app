import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ContactScreen from '../Screens/ContactScreen';

import AdminLogin from '../Screens/auth/AdminLogin';

type Props = {};

const Stack = createNativeStackNavigator();

const Contact = (props: Props) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Contact" component={ContactScreen} />
      <Stack.Screen name="Login" component={AdminLogin} />
    </Stack.Navigator>
  );
};

export default Contact;
