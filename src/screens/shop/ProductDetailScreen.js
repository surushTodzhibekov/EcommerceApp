import {useSelector, useDispatch} from 'react-redux';
import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import * as cartActions from '../../store/actions/cart';
import Colors from '../../constants/Colors';

function ProductDetailScreen(props) {
  const productId = props.route.params.productId;

  const availableCategory = useSelector((state) => state.product.product);

  const displayDetailCat = availableCategory.find(
    (cat) => cat.id === productId,
  );

  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{uri: displayDetailCat.imageUrl}}
        style={styles.image}
        resizeMode="cover"
        imageStyle={{
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
        }}>
        <TouchableOpacity
          style={styles.arrowLeft}
          onPress={() => props.navigation.goBack()}
          activeOpacity={0.6}>
          <Feather name="arrow-left" size={22} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.arrowRight} activeOpacity={0.6}>
          <Feather name="shopping-cart" size={22} color="#fff" />
          <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>6</Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>

      <ScrollView style={{backgroundColor: '#fff'}}>
        <Text style={styles.title}>{displayDetailCat.title}</Text>
        <Text style={[styles.title, styles.price]}>
          ${displayDetailCat.price}
        </Text>
        <Text style={styles.text}>{displayDetailCat.description}</Text>
      </ScrollView>
      <TouchableOpacity
        onPress={() => {
          dispatch(cartActions.addToCart(displayDetailCat));
        }}
        style={styles.cartBtn}
        activeOpacity={0.8}>
        <Text style={styles.cartText}>Add To Cart</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    height: 380,
    justifyContent: 'flex-end',
  },
  arrowLeft: {
    borderRadius: 40,
    backgroundColor: '#000',
    position: 'absolute',
    left: 15,
    top: 25,
    padding: 10,
  },
  arrowRight: {
    borderRadius: 40,
    backgroundColor: '#000',
    position: 'absolute',
    right: 15,
    top: 25,
    padding: 10,
  },
  badgeContainer: {
    top: -4,
    right: -4,
    width: 18,
    height: 18,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    backgroundColor: '#FFFFFF',
  },
  badgeText: {
    color: '#000000',
  },
  cartBtn: {
    backgroundColor: Colors.primary,
    borderRadius: 30,
    padding: 15,
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  cartText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  title: {
    padding: 14,
    fontSize: 22,
    fontWeight: 'bold',
  },
  price: {
    color: '#808080',
    paddingTop: 1,
  },
  text: {
    paddingHorizontal: 14,
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 22,
    justifyContent: 'flex-start',
    textAlign: 'justify',
    opacity: 0.8,
  },
});

export const screenOptions = () => {
  return {
    headerShown: false,
  };
};

export default ProductDetailScreen;
