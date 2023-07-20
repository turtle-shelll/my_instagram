import { Text, View, Image, Dimensions, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import Carousel from 'react-native-banner-carousel';
const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 260;

// const images = [
//   'https://images.pexels.com/photos/4245826/pexels-photo-4245826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//   'https://images.pexels.com/photos/2850287/pexels-photo-2850287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//   'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//   'https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
// ];
export default MyCarousel = () => {
  function renderPage(image, index) {
    return (
      <View key={index}>
        <Image
          style={{ width: BannerWidth, height: BannerHeight }}
          //   source={require(image)}
          source={{
            uri: image,
          }}
        />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      {/* <Carousel
          autoplay
          autoplayTimeout={4000}
          // animation={{useNativeDriver: true}}
          loop
          index={0}
          pageSize={BannerWidth}>
          {images.map((image, index) => renderPage(image, index))}
        </Carousel> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: BannerHeight,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
