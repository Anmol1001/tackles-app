import {
  View,
  Image,
  ImageBackground,
  Text,
  ScrollView,
  FlatList,
} from 'react-native';
import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import ServicesCards from '../components/services/ServicesCards';
import ServicesDisplaycard from '../components/services/ServicesDisplaycard';
import SliderCard from '../components/services/SliderCard';
import {servicesData, topServices} from '../data/Data';
import ServicesCard from '../components/home/ServicesCard';

type Props = {};

const ServicesScreen = ({navigation}: {navigation: any}) => {
  const numberOfItemsBeforeFooter = 6; // Set the number of items before the footer
  const [data, setData] = React.useState(servicesData); // State to manage the data

  // Split the servicesData into the first part (up to 6 items) and the remaining items
  const firstPart = data.slice(0, numberOfItemsBeforeFooter); // First 6 items
  const remainingItems = data.slice(numberOfItemsBeforeFooter); // Remaining items
  const renderItems = ({
    item,
    index,
  }: {
    item: {
      id: number;
      name: string;
      number: number;
      description: string;
      question: string;
      answer: string;
      image: any;
    };
    index: number;
  }) => {
    if (index === numberOfItemsBeforeFooter) {
      return (
        <View style={{paddingHorizontal: '5%', marginBottom: '5%'}}>
          <SliderCard
            name="Interior Designing"
            image={require('../assets/image/services/banner4.png')}
          />
        </View>
      );
    }
    return (
      <View
        style={{
          paddingLeft: '5%',
        }}>
        <ServicesDisplaycard
          id={item.id}
          name={item.name}
          description={item.description}
          navigation={navigation}
          question={item.question}
          answer={item.answer}
          image={item.image}
          onPress={() =>
            navigation.navigate('SingleScreen', {
              service: item, // passing entire data
            })
          }
        />
      </View>
    );
  };
  return (
    <FlatList
      data={servicesData}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItems}
      ListHeaderComponent={
        <View style={{flex: 1}}>
          <ImageBackground
            source={require('../assets/image/services/bannerServices.png')}
            resizeMode="contain"
            style={{height: 264}}>
            <HeaderComponent style={{paddingHorizontal: '5%'}} />
            <View
              style={{
                height: 140,
                justifyContent: 'flex-end',
                paddingHorizontal: '5%',
              }}>
              <Text
                style={{fontSize: 26, fontWeight: '600', letterSpacing: 0.5}}>
                Painting
              </Text>
              <Text
                style={{fontSize: 20, fontWeight: '400', letterSpacing: 0.5}}>
                Professional & Reliable Services in Dubai
              </Text>
            </View>
          </ImageBackground>
          <View
            style={{
              paddingHorizontal: '5%',
              paddingTop: '6.5%',
            }}>
            <Text
              style={{
                fontSize: 20,
                color: '#0E61CD',
                fontWeight: '700',
                marginBottom: '4%',
              }}>
              Top Services
            </Text>
            <FlatList
              data={topServices}
              keyExtractor={service => service.id.toString()}
              renderItem={({item}) => (
                <ServicesCards
                  name={item.name}
                  descrpition={item.description}
                  image={item.image}
                  navigation={navigation}
                  question={item.question}
                  answer={item.answer}
                  onPress={() =>
                    navigation.navigate('SingleScreen', {
                      service: item, // passing entire data
                    })
                  }
                />
              )}
            />

            <Text
              style={{
                fontSize: 20,
                color: '#0E61CD',
                fontWeight: '700',
                marginBottom: '4.5%',
                marginTop: '1%',
              }}>
              Our Services
            </Text>
          </View>
        </View>
      }
      numColumns={2}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default ServicesScreen;
