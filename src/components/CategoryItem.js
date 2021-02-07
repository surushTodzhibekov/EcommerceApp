import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  ImageBackground,
  Pressable,
} from 'react-native';
import Colors from '../constants/Colors';

function CategoryItem(props) {
  let TouchableCmp = TouchableOpacity;
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <View style={styles.product}>
      <View style={styles.touchable}>
        <TouchableCmp
          style={{flex: 1, ...StyleSheet.absoluteFillObject}}
          onPress={props.onSelect}
          useForeground>
          <View>
            <ImageBackground
              source={{
                uri: props.picture,
              }}
              resizeMode="cover"
              style={styles.image}>
              <View style={styles.overlay} />
              <Pressable onPress={props.onSelect}>
                <Text style={styles.text}>{props.title}</Text>
              </Pressable>
            </ImageBackground>
          </View>
        </TouchableCmp>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  product: {
    shadowColor: '#000',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    overflow: 'hidden',
    margin: 10,
    height: 200,
  },
  touchable: {
    borderRadius: 10,
  },

  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
  },

  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 18,
    marginVertical: 2,
  },
  text: {
    color: Colors.white,
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.75)',
  },
});

export default CategoryItem;
