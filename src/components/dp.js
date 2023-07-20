import { Text, View, Image, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import React, { Component } from 'react';

export default Dp = ({ img, height, width, onPress }) => {
  // isPost = props.isPost;
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.dpBorder, { width: width, height: height },
      ]}>
      {img}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  dpBorder: {
    width: 70,
    height: 70,
    borderRadius: 70,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'red',
  },
  dpImg: {
    width: '100%',
    height: '100%',
  },
});
