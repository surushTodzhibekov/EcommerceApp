import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';

function ProductItem(props) {
  let TouchableCmp = TouchableOpacity;
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <View style={styles.card}>
      <View style={styles.container}>
        <Image
          source={{uri: props.image}}
          style={styles.image}
          resizeMode="cover"
        />

        <TouchableOpacity style={styles.mainTitle} onPress={props.onSelect}>
          <Text style={styles.title} numberOfLines={2}>
            {props.title}
          </Text>
        </TouchableOpacity>
        <View style={styles.detail}>
          <Text style={styles.priceText}>${props.price}</Text>
          <TouchableOpacity style={styles.btn} onPress={props.onAddCart}>
            <Text style={styles.btnText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: 177,
    height: 280,
    margin: 20,
    marginLeft: 10,
    marginRight: 10,
    shadowColor: '#000',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 140,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  mainTitle: {
    marginLeft: 5,
    marginTop: 7,
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  priceText: {
    fontSize: 16,
  },
  detail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 35,
    marginHorizontal: 8,
  },
  btn: {
    backgroundColor: '#2DC0EB',
    borderRadius: 8,
    padding: 5,
  },
  btnText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default ProductItem;
