import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

type Props = {};

const NumberBar = ({navigation}: {navigation: any}) => {
  return (
    <View
      style={{
        flexDirection: 'row',

        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#0E61CD',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 4,
          paddingVertical: 2,
        }}>
        <Image
          source={require('../../assets/image/header/left.png')}
          style={{marginVertical: 2}}
        />
        <Text
          style={{
            fontSize: 20,
            fontWeight: '700',
            letterSpacing: 2,
            color: '#4B4B4B',
            paddingHorizontal: 20,
          }}>
          055 616 5029
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('OTP')}
        style={{
          backgroundColor: '#0E61CD',
          width: 80,
          borderTopRightRadius: 14,
          borderBottomRightRadius: 14,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{color: '#fff', fontWeight: '700'}}>Help</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NumberBar;
