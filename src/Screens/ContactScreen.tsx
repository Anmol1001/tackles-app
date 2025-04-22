import {View, Text, Touchable, TouchableOpacity} from 'react-native';
import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import SearchBar from '../components/SearchBar';

type Props = {};

const ContactScreen = ({navigation}: {navigation: any}) => {
  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <HeaderComponent style={{borderBottomWidth: 1, borderColor: '#CAD2DF'}} />
      <Text>ContactScreen</Text>
      <SearchBar />
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text>Admin Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ContactScreen;
