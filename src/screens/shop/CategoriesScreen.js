import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import CategoryItem from '../../components/CategoryItem';
import {CATEGORIES} from '../../data/dummy-data';
import Product from '../../models/Product';

function CategoriesScreen(props) {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <CategoryItem
          picture={itemData.item.picture}
          title={itemData.item.title}
          onSelect={() => {
            props.navigation.navigate('ProductOverview', {
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

export const screenOptions = () => {
  return {
    headerShown: false,
  };
};

export default CategoriesScreen;
