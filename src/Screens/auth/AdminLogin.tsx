import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import HeaderComponent from '../../components/HeaderComponent';

type Props = {};

const AdminLogin = (props: Props) => {
  return (
    <View style={{flex: 1}}>
      <HeaderComponent
        style={{
          paddingHorizontal: '5%',
          borderBottomWidth: 1,
          borderColor: '#CAD2DF',
        }}
      />
      <View style={{paddingHorizontal: '5%', flex: 1, alignItems: 'center'}}>
        <Image source={require('../../assets/image/admin.png')} />
        <Text>Welcome, Admin.</Text>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            borderWidth: 1,
          }}>
          <TextInput placeholder="Email Adress" />
        </TouchableOpacity>
        <TextInput placeholder="* * * * * * *" secureTextEntry />
      </View>
    </View>
  );
};

export default AdminLogin;
