import {View, Text, Image} from 'react-native';
import React from 'react';
import HeaderComponent from '../components/HeaderComponent';

import ServicesDisplaycard from '../components/services/ServicesDisplaycard';

type Props = {};

const SingleScreen: React.FC<{route: any}> = ({route}) => {
  const {name, id, description, question, answer, image} = route.params;
  return (
    <View style={{flex: 1}}>
      <HeaderComponent style={{borderBottomWidth: 1, borderColor: '#CAD2DF'}} />
      <View
        style={{
          paddingHorizontal: '5%',
          paddingTop: '5%',
        }}>
        <Image
          source={image}
          style={{width: '100%', height: '34%', borderRadius: 8}}
        />
        <Text
          style={{
            fontSize: 20,
            color: '#0E61CD',
            fontWeight: '700',
            marginTop: '4.5%',
            marginBottom: '2%',
          }}>
          Tackles | Dubai
        </Text>
        <Text style={{color: '#0E61CD', fontWeight: '400', fontSize: 19}}>
          Professional & Reliable Services in Dubai
        </Text>
        <Text
          style={{
            fontSize: 17,
            fontWeight: '500',
            marginTop: '2.5%',
          }}>
          {description}
        </Text>
        <Text
          style={{
            fontSize: 17,
            fontWeight: '500',
            marginTop: '3%',
          }}>
          {question}
        </Text>
        <Text style={{fontSize: 17, fontWeight: '500'}}>{answer}</Text>
        <Text
          style={{
            fontSize: 20,
            color: '#0E61CD',
            fontWeight: '700',
            marginTop: '1.8%',
            marginBottom: '3%',
          }}>
          Other Services
        </Text>
        <View style={{flexDirection: 'row', gap: '5.5%'}}>
          <ServicesDisplaycard
            textStyle={{marginTop: 4, fontSize: 14, fontWeight: '600'}}
            style={{alignItems: 'center'}}
            name="Plumbing"
            image={require('../assets/image/services/s5.png')}
          />
          <ServicesDisplaycard
            style={{alignItems: 'center'}}
            name="Window Cleaning"
            image={require('../assets/image/services/s6.png')}
          />
        </View>
      </View>
    </View>
  );
};

export default SingleScreen;
