import React from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
import OrdersScreen, {
  screenOptions as ordersScreenOptions,
} from '../screens/shop/OrdersScreen';

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

// Orders Navigator
const OrdersNavigator = createStackNavigator();
export const OrdersStackNavigator = () => {
  return (
    <OrdersNavigator.Navigator>
      <OrdersNavigator.Screen
        name="Order"
        component={OrdersScreen}
        options={ordersScreenOptions}
      />
    </OrdersNavigator.Navigator>
  );
};

// // Orders Navigator
// const CategoriesNavigator = createStackNavigator();
// export const CategoryStackNavigator = () => {
//   return (
//     <CategoriesNavigator.Navigator>
//       <CategoriesNavigator.Screen
//         name="Category"
//         component={CategoriesScreen}
//       />
//     </CategoriesNavigator.Navigator>
//   );
// };

//DrawerNavigator
const ShopNavigators = createDrawerNavigator();
export const ShopDrawerNavigators = () => {
  return (
    <ShopNavigators.Navigator>
      {/* <ShopNavigators.Screen
        name="Home"
        component={CategoriesScreen}
        options={{
          drawerIcon: (props) => (
            <Ionicons
              name={Platform.OS === 'android' ? 'md-home' : 'ios-home'}
              size={23}
              color={props.color}
            />
          ),
        }}
      /> */}
      <ShopNavigators.Screen
        name="Product"
        component={ProductsStackNavigator}
        options={{
          drawerIcon: (props) => (
            <Ionicons
              name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
              size={23}
              color={props.color}
            />
          ),
        }}
      />
      <ShopNavigators.Screen
        name="Orders"
        component={OrdersStackNavigator}
        options={{
          drawerIcon: (props) => (
            <Ionicons
              name={Platform.OS === 'android' ? 'md-list' : 'ios-list'}
              size={23}
              color={props.color}
            />
          ),
        }}
      />
    </ShopNavigators.Navigator>
  );
};
