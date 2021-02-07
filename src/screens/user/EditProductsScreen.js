import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  TouchableOpacity,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {color} from 'react-native-reanimated';
import Feather from 'react-native-vector-icons/Feather';

const image =
  'https://images.pexels.com/photos/227417/pexels-photo-227417.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';

function EditProductsScreen(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/image/nike-metcon-free.png')}
        style={styles.image}
        resizeMode="contain"
        imageStyle={{borderBottomLeftRadius: 30, borderBottomRightRadius: 30}}>
        <TouchableOpacity style={styles.arrowLeft} activeOpacity={0.6}>
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
        <Text style={styles.title}>Title</Text>
        <Text style={[styles.title, styles.price]}>225.36</Text>
        <Text style={styles.text}>
          In this video i will be designing a Home and Post Details Page for a
          Travel Mobile Application in React Native. Check out Part 1 of this to
          see how i design this in Adobe XD. Also make sure to subscribe if you
          haven't.
        </Text>
      </ScrollView>
      <TouchableOpacity style={styles.cartBtn} activeOpacity={0.8}>
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
    backgroundColor: '#000',
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

export default EditProductsScreen;
