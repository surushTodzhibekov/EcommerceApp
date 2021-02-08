import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

import CartItem from './CartItem';

function OrderItem(props) {
  return (
    <View style={styles.container}>
      <View style={styles.summary}>
        <Text style={styles.totalAmount}>${props.amount.toFixed(2)}</Text>
        <Text style={styles.date}>{props.date}</Text>
      </View>
      <View>
        <Button title="Show Detail" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    elevation: 5,
    margin: 20,
    padding: 10,
  },
  summary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  totalAmount: {
    fontSize: 16,
  },
  date: {
    fontSize: 16,
    color: '#888',
  },
});

export default OrderItem;
