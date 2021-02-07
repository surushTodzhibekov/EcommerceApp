import React from 'react';
import {View, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import ProductOverviewScreen, {
  screenOptions as productScreenOptions,
} from '../screens/shop/ProductOverviewScreen';
import ProductDetailScreen, {
  screenOptions as detailScreenOptions,
} from '../screens/shop/ProductDetailScreen';
import CategoriesScreen, {
  screenOptions as categoryScreenOptions,
} from '../screens/shop/CategoriesScreen';
import CartScreen from '../screens/shop/CartScreen';

//Product Navigator
const ProductsNavigator = createStackNavigator();

export const ProductsStackNavigator = () => {
  return (
    <ProductsNavigator.Navigator>
      <ProductsNavigator.Screen
        options={categoryScreenOptions}
        name="Category"
        component={CategoriesScreen}
      />
      <ProductsNavigator.Screen
        options={productScreenOptions}
        name="ProductOverview"
        component={ProductOverviewScreen}
      />
      <ProductsNavigator.Screen
        options={detailScreenOptions}
        name="ProductDetail"
        component={ProductDetailScreen}
      />
      <ProductsNavigator.Screen name="Cart" component={CartScreen} />
    </ProductsNavigator.Navigator>
  );
};
