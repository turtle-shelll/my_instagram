import { Text, View, StyleSheet, Image, Animated } from 'react-native';
import React, { Component, useEffect, useState } from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import AnimatedImg from './animatedImage';
import MyModel from './Model';
import MyCarousel from './myCarousel';

export default Loader = () => {
  const [showAnimation, setShowAnimation] = useState(true);
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setSpinner(!spinner);
    }, 3000);
  }, []);

  return (
    <View style={styles.Loader}>
      {/* {this.state.spinner ? (
          //   <Spinner
          //     visible={this.state.spinner}
          //     textContent={'Loading...'}
          //     //   textStyle={styles.spinnerTextStyle}
          //     animation={'fade'}
          //     customIndicator={<AnimatedImg />}
          //   />
          <AnimatedImg />
        ) : (
            <MyModel />
          )} */}
      <MyCarousel />
    </View>
  );
}

const styles = StyleSheet.create({
  Loader: {
    position: 'relative',
    flex: 1,
    // width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gear_1: {
    position: 'absolute',
    top: '50%',
  },
  gear_2: {
    position: 'absolute',
    top: '54%',
    left: '50%',
  },
  //  Spinnner style here
  spinnerTextStyle: {
    color: '#000',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
