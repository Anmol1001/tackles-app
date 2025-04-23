import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../Screens/HomeScreen';
import ContactScreen from '../Screens/ContactScreen';
import {Image, StyleSheet} from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import ServiceBookingScreen from '../Screens/ServiceBookingScreen';
import FaqsScreen from '../Screens/FaqsScreen';
import ServicesScreen from '../Screens/ServicesScreen';
import Booking from './Booking';
import Home from './Home';
import Services from './Services';
import Contact from './Contact';
import YourIcon from '../assets/icons/Vector.svg';
import HomeIcon from '../assets/icons/Home.svg';
import HomeActiveIcon from '../assets/icons/HomeActive.svg';
import ServicesIcon from '../assets/icons/Service.svg';
import BookingIcon from '../assets/icons/Book.svg';
import FaqsIcon from '../assets/icons/Faq.svg';
import ContactIcon from '../assets/icons/Contact.svg';
import ServiceActiveIcon from '../assets/icons/ServiceActive.svg';
import FaqsActiveIcon from '../assets/icons/FaqActive.svg';
import ContactActiveIcon from '../assets/icons/ContactActive.svg';
import Faqs from './Faqs';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {
          backgroundColor: '#D9D9D9',
          justifyContent: 'center', // Center tab items vertically
          alignItems: 'center',
          height: 54,
        },
        tabBarIcon: ({focused}) => {
          if (route.name === 'Home') {
            return focused ? (
              <HomeActiveIcon width={28} height={28} />
            ) : (
              <HomeIcon width={18} height={18} />
            );
          } else if (route.name === 'Services') {
            return focused ? (
              <ServiceActiveIcon width={18} height={18} />
            ) : (
              <ServicesIcon width={24} height={24} />
            );
          } else if (route.name === 'BookingTab') {
            return (
              <BookingIcon width={44} height={44} style={{marginTop: 16}} />
            );
          } else if (route.name === 'Request') {
            return focused ? (
              <FaqsActiveIcon width={20} height={20} />
            ) : (
              <FaqsIcon width={24} height={24} />
            );
          } else if (route.name === 'Contact') {
            return focused ? (
              <ContactActiveIcon width={20} height={20} />
            ) : (
              <ContactIcon width={18} height={18} />
            );
          }
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: '#4B4B4B',
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="Services"
        component={Services}
        options={{
          tabBarLabel: 'Services',
        }}
      />

      <Tab.Screen
        name="BookingTab"
        component={Booking}
        options={{
          tabBarLabel: '',
        }}
      />
      <Tab.Screen
        name="Request"
        component={Faqs}
        options={{
          tabBarLabel: 'Request',
        }}
      />
      <Tab.Screen
        name="Contact"
        component={Contact}
        options={{
          tabBarLabel: 'Contact',
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tab: {height: 200},
});
export default Tabs;
