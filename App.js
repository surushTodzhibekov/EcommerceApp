import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import {ShopDrawerNavigators} from './src/navigation/ShopNavigator';
import ordersReducer from './src/store/reducers/orders';
import productReducer from './src/store/reducers/product';
import cartReducer from './src/store/reducers/cart';

const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
  orders: ordersReducer,
});

const store = createStore(rootReducer);

function App(props) {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <ShopDrawerNavigators />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({});

export default App;
