import { Text, View, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import Lodder from '../components/Lodder';
import Icon1 from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';

export default DemoScreen = () => {
  return (
    <>
      {/* //   <View style={{backgroundColor: 'red', flex: 1}}> */}
      {/* <LinearGradient> */}
      {/* <Icon1 name="home" size={50} /> */}
      <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.linearGradient}>
        <Lodder />
        <Text style={styles.buttonText}>HomeScreen</Text>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    width: '100%',
    height: '40%',
    textAlign: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
