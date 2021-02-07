import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import CategoriesScreen from './src/screens/shop/CategoriesScreen';
import {ProductsStackNavigator} from './src/navigation/ShopNavigator';
import EditProductsScreen from './src/screens/user/EditProductsScreen';
import productReducer from './src/store/reducers/product';
import cartReducer from './src/store/reducers/cart';
import CartItem from './src/models/cart-item';

const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
});

const store = createStore(rootReducer);

function App(props) {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <ProductsStackNavigator />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({});

export default App;
