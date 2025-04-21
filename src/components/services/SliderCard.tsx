import {View, Text, Image} from 'react-native';
import React from 'react';

type Props = {};

const SliderCard = (props: Props) => {
  return (
    <View
      style={{
        alignItems: 'center',

        marginBottom: '2%',
      }}>
      <Image source={require('../../assets/image/services/banner2.png')} />
      <View style={{alignItems: 'center', position: 'absolute', top: '22%'}}>
        <Text style={{fontSize: 20, fontWeight: '700'}}>
          Tackels{'  '}| Dubai
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '500',
            marginBottom: '4%',
            marginTop: '2%',
          }}>
          Professional & Reliable Services in Dubai
        </Text>

        <Text style={{fontSize: 20, fontWeight: '600'}}>
          Light Partition Installation
        </Text>
      </View>
    </View>
  );
};

export default SliderCard;
