import {View, Text, Image} from 'react-native';
import React from 'react';

type Props = {name: string; descrpition: string; image: any};

const ServicesCards = ({name, descrpition, image}: Props) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginBottom: '5%',
      }}>
      <View style={{flex: 1}}>
        <Image source={image} style={{borderRadius: 8}} />
      </View>
      <View
        style={{
          width: '48%',

          marginLeft: '2%',
          marginTop: '0.5%',

          gap: '2%',
        }}>
        <Text style={{fontSize: 18, fontWeight: '700'}}>{name}</Text>

        <Text style={{fontSize: 14, fontWeight: '400'}}>{descrpition}</Text>
      </View>
    </View>
  );
};

export default ServicesCards;
