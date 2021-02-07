import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

import HeaderButton from '../../components/UI/HeaderButton';
import ProductItem from '../../components/ProductItem';
import * as cartActions from '../../store/actions/cart';

function ProductOverviewScreen(props) {
  const productId = props.route.params.productId;

  const availableCategory = useSelector(
    (state) => state.product.filteredProduct,
  );
  const displayedCategory = availableCategory.filter(
    (catId) => catId.ownerId.indexOf(productId) >= 0,
  );
  const dispatch = useDispatch();

  return (
    <FlatList
      data={displayedCategory}
      numColumns={2}
      keyExtractor={(item, index) => item.id}
      style={{width: '100%'}}
      renderItem={(itemData) => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onAddCart={() => {
            dispatch(cartActions.addToCart(itemData.item));
          }}
          onSelect={() => {
            props.navigation.navigate('ProductDetail', {
              productId: itemData.item.id,
              productTitle: itemData.item.title,
            });
          }}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {},
});

export const screenOptions = (props) => {
  return {
    title: props.route.params.categoryTitle,
    borderBottomColor: 'transparent',
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Cart"
          iconName={Platform.OS === 'android' ? 'shopping-cart' : 'ios-cart'}
          onPress={() => {
            props.navigation.navigate('Cart');
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default ProductOverviewScreen;
