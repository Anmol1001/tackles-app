import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Alert,
} from 'react-native';
import HeaderComponent from '../../components/HeaderComponent';
import EmailIcon from '../../assets/icons/Email.svg';
import EyeOnIcon from '../../assets/icons/EyeOff.svg';

import EyeOffIcon from 'react-native-vector-icons/Ionicons';
type Props = {};
const AdminLogin = ({navigation}: {navigation: any}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState<any>('');
  const [password, setPassword] = useState<any>('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = () => {
    if (password && email === 'admin') {
      navigation.navigate('ViewBooking');
    } else {
      Alert.alert('Wrong Email or Password');
    }
  };

  return (
    <KeyboardAvoidingView
      style={{flex: 1, backgroundColor: '#fff'}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        keyboardShouldPersistTaps="handled">
        <HeaderComponent
          style={{
            paddingHorizontal: '5%',
            borderBottomWidth: 1,
            borderColor: '#CAD2DF',
          }}
        />
        <View
          style={{
            paddingHorizontal: '5%',
            flex: 1,
            alignItems: 'center',
            marginTop: '22%',
          }}>
          <Image source={require('../../assets/image/admin.png')} />
          <Text
            style={{
              fontSize: 24,
              fontWeight: '500',
              marginTop: '18%',
              marginBottom: '8%',
            }}>
            Welcome, Admin.
          </Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 16,
              borderWidth: 1,
              width: '100%',
              marginBottom: '5%',
              borderRadius: 8,
              borderColor: '#4B4B4B',
              alignItems: 'center',
            }}>
            <TextInput
              placeholder="E-mail Address"
              placeholderTextColor={'#434343'}
              style={{
                fontSize: 20,
                fontWeight: '400',
                flex: 1,
              }}
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
            <EmailIcon width={30} height={20} />
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 16,
              borderWidth: 1,
              width: '100%',
              borderRadius: 8,
              borderColor: '#4B4B4B',
              alignItems: 'center',
            }}>
            <TextInput
              placeholder="Password"
              placeholderTextColor={'#434343'}
              secureTextEntry={!passwordVisible}
              style={{
                fontSize: 20,
                fontWeight: '400',
                flex: 1,
              }}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={togglePasswordVisibility}>
              {passwordVisible ? (
                <EyeOffIcon name="eye" size={30} />
              ) : (
                <EyeOnIcon width={30} height={30} />
              )}
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={{
              marginTop: '15%',
              borderWidth: 1,
              height: 48,
              width: 129,
              borderRadius: 8,
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: '#0E61CD',
            }}
            onPress={handleSubmit}>
            <Text style={{fontSize: 22, fontWeight: '600'}}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AdminLogin;
