import {View, Text, Image} from 'react-native';
import React from 'react';

type Props = {name: string; image: any};

const SliderCard = ({name, image}: Props) => {
  return (
    <View
      style={{
        alignItems: 'center',

        marginBottom: '2%',
      }}>
      <Image source={image} />
      <View style={{alignItems: 'center', position: 'absolute', top: '40%'}}>
        <Text style={{fontSize: 20, fontWeight: '700', color: '#fff'}}>
          Tackels{'  '}| Dubai
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '500',
            marginBottom: '4%',
            marginTop: '2%',
            color: '#fff',
          }}>
          Professional & Reliable Services in Dubai
        </Text>

        <Text style={{fontSize: 20, fontWeight: '400', color: '#fff'}}>
          {name}
        </Text>
      </View>
    </View>
  );
};

export default SliderCard;
