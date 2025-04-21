import {View, Text, FlatList, TextInput} from 'react-native';
import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import FaqsCard from '../components/faqs/FaqsCard';
import SearchBar from '../components/SearchBar';

const FaqsScreen = () => {
  const questions = [
    {name: 'General Question', number: 5},
    {
      name: 'Painting',
      number: 8,
    },
    {
      name: 'Wallpaper Fixing',
      number: 11,
    },
    {
      name: ' Flooring',
      number: 7,
    },
    {
      name: 'Carpenting',
      number: 4,
    },

    {
      name: 'Air Filteration',
      number: 10,
    },
    {
      name: 'Cladding',
      number: 12,
    },
    {
      name: 'Roofing',
      number: 6,
    },
    {
      name: 'Cleaning',
      number: 9,
    },
    {
      name: 'Booking Related',
      number: 5,
    },
  ];
  return (
    <View style={{flex: 1}}>
      <HeaderComponent style={{borderBottomWidth: 1, borderColor: '#CAD2DF'}} />

      <View style={{paddingHorizontal: '4%', paddingTop: '5%'}}>
        <Text style={{fontSize: 22, fontWeight: '700', marginBottom: 10}}>
          Professional & Reliable Services
        </Text>
        <Text style={{fontSize: 20, fontWeight: '500', marginBottom: 5}}>
          FAQs
        </Text>
        <SearchBar />

        <FlatList
          data={questions}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <FaqsCard name={item.name} number={item.number} />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default FaqsScreen;
