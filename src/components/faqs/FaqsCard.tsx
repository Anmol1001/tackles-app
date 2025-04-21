import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

type Props = {name: string; number: number};

const FaqsCard = ({name, number}: Props) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 42,
        borderWidth: 1,
        alignItems: 'center',
        borderColor: '#CAD2DF',
        borderRadius: 4,
        marginVertical: 5,
      }}>
      <Text style={{paddingLeft: 10, fontSize: 20, fontWeight: '500'}}>
        {name}
      </Text>
      <View
        style={{
          height: 40,
          width: 40,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#0E61CD',
          borderRadius: 4,
          marginRight: -1,
        }}>
        <Text style={{color: '#fff', fontSize: 20, fontWeight: '400'}}>
          {number}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default FaqsCard;
