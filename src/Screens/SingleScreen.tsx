import {View, Text, Image} from 'react-native';
import React from 'react';
import HeaderComponent from '../components/HeaderComponent';

import ServicesDisplaycard from '../components/services/ServicesDisplaycard';

type Props = {};

const SingleScreen = (props: Props) => {
  return (
    <View style={{flex: 1}}>
      <HeaderComponent style={{borderBottomWidth: 1, borderColor: '#CAD2DF'}} />
      <View
        style={{
          paddingHorizontal: '5%',
          paddingTop: '5%',
        }}>
        <Image source={require('../assets/image/singlePage/singleP1.png')} />
        <Text
          style={{
            fontSize: 20,
            color: '#0E61CD',
            fontWeight: '700',
            marginTop: '5%',
            marginBottom: '2%',
          }}>
          Tackles | Dubai
        </Text>
        <Text style={{color: '#0E61CD', fontWeight: '400'}}>
          Professional & Reliable Services in Dubai
        </Text>
        <Text
          style={{
            fontSize: 17,
            fontWeight: '500',
            marginTop: '5%',
            lineHeight: 22,
          }}>
          If you’re looking for painting service, we offer expert consultation
          on colours, materials and budgets to make sure you get what you want.
        </Text>
        <Text
          style={{
            fontSize: 17,
            fontWeight: '500',
            marginTop: '5%',
            lineHeight: 20,
          }}>
          What type of paints do you use for interior and exterior surfaces?
        </Text>
        <Text style={{fontSize: 17, fontWeight: '500', lineHeight: 22}}>
          We use high-quality, Dubai climate-appropriate paints including
          water-based emulsions for interiors and weather-resistant paints for
          exteriors.
        </Text>
        <Text
          style={{
            fontSize: 20,
            color: '#0E61CD',
            fontWeight: '700',
            marginTop: '5%',
            marginBottom: '5%',
          }}>
          Other Services
        </Text>
        <View style={{flexDirection: 'row', gap: '5.5%'}}>
          <ServicesDisplaycard
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
