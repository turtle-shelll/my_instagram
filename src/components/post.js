import { Image, StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';
import PostHeader from '../reuseAbleComponents/postHeader';
import PostFooter from '../reuseAbleComponents/postFooter';

export default Post = () => {
  return (
    <View>
      <PostHeader />
      <View style={styles.imgContainer}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
          }}
          resizeMode="cover"
          style={styles.postImg}
        />
      </View>
      <PostFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  imgContainer: {
    width: 400,
    height: 360,
  },
  postImg: {
    width: '100%',
    height: '100%',
  },
});
