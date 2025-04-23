import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

type Props = {
  category?: string;
  number?: number;
  questions?: Array<{question: string; answer: string}>;

  navigation?: any;
  id?: number;
};

const FaqsCard = ({
  category,
  number,
  questions,

  navigation,
  id,
}: Props) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 42,
        borderWidth: 1,
        alignItems: 'center',
        borderColor: '#E3E3E3',
        borderRadius: 4,
        marginVertical: 5,
      }}
      onPress={() =>
        navigation.navigate('FAQsSingle', {category, number, id, questions})
      }>
      <Text style={{paddingLeft: 10, fontSize: 20, fontWeight: '500'}}>
        {category}
      </Text>
      <View
        style={{
          height: 42,
          width: 42,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
          borderRadius: 4,
          borderWidth: 1,
          borderColor: '#979797',
          marginRight: -1,
        }}>
        <Text style={{color: '#0E61CD', fontSize: 20, fontWeight: '400'}}>
          {number}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default FaqsCard;
