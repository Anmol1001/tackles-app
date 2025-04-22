import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {questions} from '../../data/Data';

type Props = {
  name: string;
  image: any;
  onPress?: any;
  style?: any;
  textStyle?: any;
  navigation?: any;
  description?: string;
  question?: string;
  answer?: string;
  id?: number;
};

const ServicesDisplaycard = ({
  name,
  image,

  style,
  textStyle,
  navigation,
  question,
  answer,
  description,
  id,
}: Props) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('SingleScreen', {
          name,
          image,
          question,
          answer,
          description,
          id,
        })
      }
      style={[style, {marginBottom: '5.4%'}]}>
      <Image source={image} style={{borderRadius: 4}} />
      <Text
        style={[
          {fontSize: 14, fontWeight: '600', marginVertical: 8},
          textStyle,
        ]}>
        {' '}
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default ServicesDisplaycard;
