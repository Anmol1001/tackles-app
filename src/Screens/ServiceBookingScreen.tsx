import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import Dropdown from '../components/Dropdown';
import {budget, services, shifts} from '../data/Data';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../redux/store';
import {addFormData, updateFormData} from '../redux/slice/formSlice';

const ServiceBookingScreen = ({navigation}: {navigation: any}) => {
  const dispatch: AppDispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [selectedShift, setSelectedShift] = useState('');
  const [selectedPriority, setSelectedPriority] = useState('');
  const [selectedBudget, setSelectedBudget] = useState('');
  const [selectedArea, setSelectedArea] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (
      name &&
      number &&
      selectedService &&
      selectedShift &&
      selectedPriority &&
      selectedBudget &&
      selectedArea
    ) {
      const newEntry = {
        id: Date.now(), // Use timestamp as unique ID
        name,
        number,
        selectedService,
        selectedShift,
        selectedPriority,
        selectedBudget,
        selectedArea,
        message,
      };

      dispatch(addFormData(newEntry));
      navigation.navigate('AdminOtp'); // Navigate to OTP screen
    } else {
      Alert.alert('Incomplete Form', 'Please fill in all required fields.');
    }
  };

  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <HeaderComponent style={{borderBottomWidth: 1, borderColor: '#CAD2DF'}} />
      <View style={{paddingHorizontal: '4%', paddingTop: '6%'}}>
        <Text style={{fontSize: 20, fontWeight: '700'}}>
          Professional & Reliable Services
        </Text>
        <Text style={{fontSize: 20, fontWeight: '500'}}>Request Services</Text>
        <View style={{marginTop: '6%'}}>
          <TextInput
            placeholder="Full Name"
            value={name}
            onChangeText={setName}
            style={{borderWidth: 1, borderRadius: 4, paddingHorizontal: 10}}
          />
          <TextInput
            placeholder="Phone Number"
            value={number}
            onChangeText={value => setNumber(value.replace(/[^0-9]/g, ''))}
            keyboardType="numeric"
            style={{borderWidth: 1, borderRadius: 4, paddingHorizontal: 10}}
          />
          <Dropdown
            options={services}
            placeholder="Select Services"
            placeholderColor="#555"
            iconName="arrow-drop-down"
            iconColor="#000"
            onSelectOption={setSelectedService}
          />
          <Dropdown
            options={shifts}
            placeholder="Select Shift"
            placeholderColor="#555"
            iconName="arrow-drop-down"
            iconColor="#000"
            onSelectOption={setSelectedShift}
          />
          <Dropdown
            options={shifts}
            placeholder="Select Priority"
            placeholderColor="#555"
            iconName="arrow-drop-down"
            iconColor="#000"
            onSelectOption={setSelectedPriority}
          />
          <Dropdown
            options={budget}
            placeholder="Select Budget"
            placeholderColor="#555"
            iconName="arrow-drop-down"
            iconColor="#000"
            onSelectOption={setSelectedBudget}
          />
          <Dropdown
            options={budget}
            placeholder="Select Area"
            placeholderColor="#555"
            iconName="arrow-drop-down"
            iconColor="#000"
            onSelectOption={setSelectedArea}
          />
          <TextInput
            placeholder="Message"
            value={message}
            onChangeText={setMessage}
            style={{height: 120, borderWidth: 1, paddingBottom: 95}}
            editable
            multiline
            placeholderTextColor={'#4B4B4B'}
          />
        </View>
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
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
          onPress={handleSubmit}>
          <Text style={{color: '#000'}}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ServiceBookingScreen;
