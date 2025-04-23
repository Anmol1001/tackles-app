import {View, Text, FlatList, TextInput} from 'react-native';
import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import FaqsCard from '../components/faqs/FaqsCard';
import SearchBar from '../components/SearchBar';
import {faqsQuestioin, questions} from '../data/Data';

const FaqsScreen = ({navigation}: {navigation: any}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
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
          data={faqsQuestioin}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <FaqsCard
              category={item.category}
              number={item.number}
              id={item.id}
              questions={item.questions}
              navigation={navigation}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default FaqsScreen;
