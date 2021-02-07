import React from 'react';
import {View, StyleSheet} from 'react-native';
import {HeaderButton} from 'react-navigation-header-buttons';
import Feather from 'react-native-vector-icons/Feather';

function CustomHeaderButton(props) {
  return (
    <HeaderButton
      {...props}
      IconComponent={Feather}
      iconSize={23}
      color="black"
    />
  );
}

export default CustomHeaderButton;
