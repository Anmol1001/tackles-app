import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SingleBooking = ({route}: {route: any}) => {
  // Get the entry data passed via navigation
  const {entry} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Booking Details</Text>

      <View style={styles.details}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>{entry.name}</Text>

        <Text style={styles.label}>Phone Number:</Text>
        <Text style={styles.value}>{entry.number}</Text>

        <Text style={styles.label}>Selected Service:</Text>
        <Text style={styles.value}>{entry.selectedService}</Text>

        <Text style={styles.label}>Selected Shift:</Text>
        <Text style={styles.value}>{entry.selectedShift}</Text>

        <Text style={styles.label}>Selected Priority:</Text>
        <Text style={styles.value}>{entry.selectedPriority}</Text>

        <Text style={styles.label}>Selected Budget:</Text>
        <Text style={styles.value}>{entry.selectedBudget}</Text>

        <Text style={styles.label}>Selected Area:</Text>
        <Text style={styles.value}>{entry.selectedArea}</Text>

        <Text style={styles.label}>Message:</Text>
        <Text style={styles.value}>{entry.message}</Text>
      </View>
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
  details: {
    marginTop: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
    marginBottom: 15,
    color: '#333',
  },
});

export default SingleBooking;
