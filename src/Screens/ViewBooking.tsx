import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import HeaderComponent from '../components/HeaderComponent';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';

type Props = {};

const ViewBooking = ({navigation}: {navigation: any}) => {
  const entries = useSelector((state: RootState) => state.form.entries);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Services Overview</Text>
      <FlatList
        data={entries}
        keyExtractor={item => item.id.toString()}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('SingleBooking', {entry: item})}>
            <Text>
              {index + 1}. Name: {item.name}
            </Text>
            <Text>Service: {item.selectedService}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  listItem: {
    flexDirection: 'row',
    marginBottom: 15,
    alignItems: 'flex-start',
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    marginRight: 10,
  },
  details: {
    flexDirection: 'column',
  },
  value: {
    fontSize: 16,
    color: '#333',
  },
});

export default ViewBooking;
