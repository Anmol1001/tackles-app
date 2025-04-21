import {View, Text} from 'react-native';
import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import SearchBar from '../components/SearchBar';

type Props = {};

const ContactScreen = (props: Props) => {
  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <HeaderComponent style={{borderBottomWidth: 1, borderColor: '#CAD2DF'}} />
      <Text>ContactScreen</Text>
      <SearchBar />
    </View>
  );
};

export default ContactScreen;
