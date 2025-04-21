import {View, Image, ImageBackground, Text, ScrollView} from 'react-native';
import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import ServicesCards from '../components/services/ServicesCards';
import ServicesDisplaycard from '../components/services/ServicesDisplaycard';
import SliderCard from '../components/services/SliderCard';

type Props = {};

const ServicesScreen = ({navigation}: {navigation: any}) => {
  return (
    <ScrollView style={{flex: 1}}>
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
          <Text style={{fontSize: 26, fontWeight: '600', letterSpacing: 0.5}}>
            Painting
          </Text>
          <Text style={{fontSize: 20, fontWeight: '400', letterSpacing: 1}}>
            Professional & Reliable Services in Dubai
          </Text>
        </View>
      </ImageBackground>
      <View
        style={{
          paddingHorizontal: '5%',
          paddingTop: '6.5%',
          paddingBottom: '5%',
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

        <ServicesCards
          name="Plumbing"
          descrpition="Reliable plumbing solutions for homes and businesses 
from leak repairs to full system installations. "
          image={require('../assets/image/services/s2.png')}
        />
        <ServicesCards
          name="Window Cleaning"
          descrpition="Window cleaning services to keep your glass spotless, streak-free, and shining inside and out."
          image={require('../assets/image/services/s1.png')}
        />
        <Text
          style={{
            fontSize: 20,
            color: '#0E61CD',
            fontWeight: '700',
            marginBottom: '4%',
          }}>
          Our Services
        </Text>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            rowGap: 20,
            columnGap: '4.9%',
            marginBottom: '5%',
          }}>
          <ServicesDisplaycard
            name="Wall Paper Fixing"
            image={require('../assets/image/services/s3.png')}
          />
          <ServicesDisplaycard
            name="Flooring"
            image={require('../assets/image/services/s4.png')}
          />
          <ServicesDisplaycard
            name="Plumbing"
            image={require('../assets/image/services/s5.png')}
          />
          <ServicesDisplaycard
            name="Window Cleaning"
            image={require('../assets/image/services/s6.png')}
          />

          <ServicesDisplaycard
            name="Carpenting"
            image={require('../assets/image/services/s7.png')}
            onPress={() => navigation.navigate('SingleScreen')}
          />
          <ServicesDisplaycard
            name="Air Conditioning"
            image={require('../assets/image/services/s8.png')}
          />
          <ServicesDisplaycard
            name="Electrical Works"
            image={require('../assets/image/services/s9.png')}
          />
          <ServicesDisplaycard
            name="Plumbing Repair"
            image={require('../assets/image/services/s10.png')}
          />
          <SliderCard />

          <ServicesDisplaycard
            name="Deep Cleaning"
            image={require('../assets/image/services/s11.png')}
          />
          <ServicesDisplaycard
            name="Ac Repair"
            image={require('../assets/image/services/s12.png')}
          />
          <Image source={require('../assets/image/services/banner3.png')} />
        </View>
      </View>
    </ScrollView>
  );
};

export default ServicesScreen;
