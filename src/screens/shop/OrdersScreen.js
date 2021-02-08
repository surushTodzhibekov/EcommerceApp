import React from 'react';
import {View, Text, StyleSheet, Platform, FlatList} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {useSelector} from 'react-redux';
import OrderItem from '../../components/OrderItem';

import HeaderButton from '../../components/UI/HeaderButton';

function OrdersScreen(props) {
  const orders = useSelector((state) => state.orders.orders);

  return (
    <FlatList
      data={orders}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <OrderItem
          amount={itemData.item.totalAmount}
          date={itemData.item.readableDate}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});

export const screenOptions = (navData) => {
  return {
    headerTitle: 'Your Orders',
    headerTitleAlign: 'center',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName={Platform.OS === 'android' ? 'menu' : 'ios-menu'}
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default OrdersScreen;
