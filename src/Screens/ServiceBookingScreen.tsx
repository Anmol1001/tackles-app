import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import DatePickerExample from '../components/DatePicker';

type Props = {};

const ServiceBookingScreen = ({navigation}: {navigation: any}) => {
  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <HeaderComponent style={{borderBottomWidth: 1, borderColor: '#CAD2DF'}} />
      <View
        style={{
          paddingHorizontal: '4%',
          paddingTop: '6%',
        }}>
        <Text style={{fontSize: 20, fontWeight: '700'}}>
          Professional & Reliable Services
        </Text>
        <Text style={{fontSize: 20, fontWeight: '500'}}>Request Services</Text>

        <View style={{marginTop: '6%'}}>
          <TextInput
            placeholder="Full Name"
            style={styles.inputBox}
            placeholderTextColor={'#4B4B4B'}
          />
          <TextInput
            placeholder="Phone Number "
            style={styles.inputBox}
            keyboardType="numeric"
            placeholderTextColor={'#4B4B4B'}
          />
          <TouchableOpacity style={styles.inputBox}>
            <Text style={{color: '#4B4B4B'}}>
              Select Services<Text style={{color: 'red'}}>*</Text>
            </Text>
          </TouchableOpacity>
          <TextInput
            placeholder="Select Date"
            style={styles.inputBox}
            placeholderTextColor={'#4B4B4B'}
          />
          <TextInput
            placeholder="Select Location"
            style={styles.inputBox}
            placeholderTextColor={'#4B4B4B'}
          />
          <TouchableOpacity style={styles.inputBox}>
            <Text style={{color: '#4B4B4B'}}>
              Select Shift<Text style={{color: 'red'}}>*</Text>
            </Text>
          </TouchableOpacity>
          <TextInput
            placeholder="Message"
            style={[styles.inputmessage]}
            editable
            multiline
            placeholderTextColor={'#4B4B4B'}
          />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: '#0E61CD',
            borderRadius: 4,
            alignItems: 'center',
            height: 40,
            justifyContent: 'center',
            width: 100,
          }}
          onPress={() => {
            navigation.navigate('OTP');
          }}>
          <Text style={{color: '#000'}}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputBox: {
    borderWidth: 1,
    borderColor: '#E3E3E3',
    paddingHorizontal: '2.5%',
    color: '#000',
    paddingBottom: 10,
    paddingTop: 14,
    marginBottom: '5%',
  },
  inputmessage: {
    height: 80,
    paddingBottom: 50,
    borderWidth: 1,
    borderColor: '#E3E3E3',
    paddingHorizontal: '2.5%',
    color: '#000',
  },
});

export default ServiceBookingScreen;
