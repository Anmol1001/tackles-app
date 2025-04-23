import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import ServicesDisplaycard from '../components/services/ServicesDisplaycard';
import {useNavigation} from '@react-navigation/native';
import {servicesData} from '../data/Data';
import {RootStackParamList} from '../types';

type SingleScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'SingleScreen'
>;

const SingleScreen: React.FC<{route: any}> = ({route}) => {
  const navigation = useNavigation<SingleScreenNavigationProp>();
  const {service} = route.params;

  const navigateToService = (service: any) => {
    navigation.navigate('SingleScreen', {service});
  };

  const shuffleArray = (array: any[]) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const otherServices = shuffleArray(
    servicesData.filter(item => item.id !== service.id),
  ).slice(0, 2);
  return (
    <View style={{flex: 1}}>
      <HeaderComponent style={{borderBottomWidth: 1, borderColor: '#CAD2DF'}} />
      <View
        style={{
          paddingHorizontal: '5%',
          paddingTop: '5%',
        }}>
        <Image
          source={service.image}
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
          {service.description}
        </Text>
        <Text
          style={{
            fontSize: 17,
            fontWeight: '500',
            marginTop: '3%',
          }}>
          {service.question}
        </Text>
        <Text style={{fontSize: 17, fontWeight: '500'}}>{service.answer}</Text>
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
          {otherServices.map(item => (
            <ServicesDisplaycard
              key={item.id}
              textStyle={{marginTop: 4, fontSize: 14, fontWeight: '600'}}
              name={item.name}
              image={item.image}
              question={item.question}
              answer={item.answer}
              description={item.description}
              onPress={() => navigateToService(item)}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

export default SingleScreen;
