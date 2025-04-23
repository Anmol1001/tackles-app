import {View, Text, Image, Touchable, TouchableOpacity} from 'react-native';
import React from 'react';

type Props = {
  name: string;
  descrpition: string;
  image: any;
  onPress?: any;
  answer?: string;
  question?: string;
  id?: any;
  navigation?: any;
};

const ServicesCards = ({
  id,
  name,
  descrpition,
  image,
  onPress,
  answer,
  question,
  navigation,
}: Props) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        marginBottom: '4%',
      }}
      onPress={onPress}>
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
    </TouchableOpacity>
  );
};

export default ServicesCards;
