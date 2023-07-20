import { Text, View, StyleSheet, Image, Animated, Modal } from 'react-native';

import React, { Component, useEffect } from 'react';

export default AnimatedImg = () => {
  const animation1 = new Animated.Value(0);

  const makeAnimation = () => {
    Animated.timing(animation1, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    makeAnimation();
  }, []);

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#e5e5e5',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Animated.Image
        style={{
          height: 65,
          width: 65,
          marginLeft: -20,
          marginTop: -10,
          transform: [
            {
              rotate: animation1.interpolate({
                inputRange: [0, 1],
                outputRange: ['0deg', '360deg'],
              }),
            },
          ],
        }}
        source={require('../assets/images/settings.png')}
      />
      <Animated.Image
        style={{
          height: 45,
          width: 45,
          marginLeft: 20,
          marginTop: -10,
          transform: [
            {
              rotate: animation1.interpolate({
                inputRange: [0, 1],
                outputRange: ['360deg', '0deg'],
              }),
            },
          ],
        }}
        source={require('../assets/images/settings.png')}
      />
      <Text style={{ fontSize: 20, fontWeight: '600' }}>Loading Data.....</Text>
    </View>
  );
}
