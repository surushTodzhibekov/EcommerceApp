import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

function CartItem(props) {
  return (
    <View style={styles.container}>
      {/* Image */}
      <Image style={styles.image} source={{uri: props.image}} />
      <View style={styles.middleContainer}>
        <Text style={styles.quantity}>{props.quantity}</Text>
        <Text style={styles.title}>{props.title.slice(0, 15)}</Text>
      </View>

      <View style={styles.rightContainer}>
        <Text style={styles.amount}>${Number(props.amount).toFixed(2)} </Text>
        <TouchableOpacity onPress={props.onRemove} activeOpacity={0.6}>
          <Ionicons
            name={Platform.OS === 'android' ? 'md-trash' : 'ios-trash'}
            size={23}
            color="red"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
  },
  image: {
    width: 80,
    height: 70,
    resizeMode: 'contain',
  },
  middleContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  quantity: {
    fontSize: 16,
    marginRight: 10,
    fontWeight: 'bold',
    color: '#888',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 90,
  },
  amount: {
    fontSize: 14,
    marginHorizontal: 2,
    color: '#000',
  },
});

export default CartItem;
