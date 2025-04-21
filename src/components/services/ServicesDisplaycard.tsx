import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

type Props = {name: string; image: any; onPress?: any; style?: any};

const ServicesDisplaycard = ({name, image, onPress, style}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <Image source={image} style={{borderRadius: 4}} />
      <Text style={{fontSize: 14, fontWeight: '600', marginVertical: 8}}>
        {' '}
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default ServicesDisplaycard;
