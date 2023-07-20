import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';
import Header from '../components/Header';
import ProfileDp from '../components/profileDp';
import Post from '../components/post';
import Footer from '../components/footer';

export default function HomeScreen() {
  const postData = [{}, {}, {}, {}, {}, {}];

  const renderPost = ({ item, index }) => {
    if (index === 0) return <ProfileDp />;
    return <Post />;
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={[styles.topView]}>
        <Header />
        {/* <ScrollView> */}
        <FlatList
          data={postData}
          nestedScrollEnabled
          renderItem={renderPost}
          style={styles.FlatListStyle}
        />
        {/* </ScrollView> */}
        <Footer />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  topView: {
    flex: 1,
  },
  FlatListStyle: {
    paddingBottom: 65
  },
});
