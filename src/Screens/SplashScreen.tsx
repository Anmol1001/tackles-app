import {View, Text, Image, StyleSheet, InteractionManager} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const SplashScreen = ({navigation}: {navigation: any}) => {
  const [counter, setCounter] = useState(10); // starts from 3

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter(prev => {
        if (prev === 1) {
          clearInterval(timer);

          InteractionManager.runAfterInteractions(() => {
            navigation.replace('OnBoarding1');
          });
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/image/splash.png')}
        style={styles.splashImage}
      />
      <Text style={styles.counter}>{counter}</Text>
      <View style={styles.logo}>
        <Text style={{fontSize: 16, color: '#4B4B4B', fontWeight: '400'}}>
          Technology Partner
        </Text>
        <Image
          source={require('../assets/image/sriyogLogo.png')}
          style={styles.logo}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  counter: {
    top: '10%',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  splashImage: {
    top: '28%',
  },
  logo: {
    bottom: '8%',
    alignItems: 'center',
    gap: 20,
  },
});

export default SplashScreen;
