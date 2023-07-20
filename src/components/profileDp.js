import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, { Component } from 'react';
import Dp from './dp';

export default ProfileDp = () => {
  const persons = [
    {
      img: (
        <Image
          source={require('../assets/images/person3.jpg')}
          resizeMode="cover"
          style={styles.dpImg}
        />
      ),
      userName: 'user Name',
    },
    {
      img: (
        <Image
          source={require('../assets/images/person4.webp')}
          resizeMode="cover"
          style={styles.dpImg}
        />
      ),
      userName: 'user Name',
    },
    {
      img: (
        <Image
          source={require('../assets/images/person5.jpg')}
          resizeMode="cover"
          style={styles.dpImg}
        />
      ),
      userName: 'user Name',
    },
    {
      img: (
        <Image
          source={require('../assets/images/person6.jpg')}
          resizeMode="cover"
          style={styles.dpImg}
        />
      ),
      userName: 'user Name',
    },
    {
      img: (
        <Image
          source={require('../assets/images/person3.jpg')}
          resizeMode="cover"
          style={styles.dpImg}
        />
      ),
      userName: 'user Name',
    },
    {
      img: (
        <Image
          source={require('../assets/images/person4.webp')}
          resizeMode="cover"
          style={styles.dpImg}
        />
      ),
      userName: 'user Name',
    },
    {
      img: (
        <Image
          source={require('../assets/images/person5.jpg')}
          resizeMode="cover"
          style={styles.dpImg}
        />
      ),
      userName: 'user Name',
    },
    {
      img: (
        <Image
          source={require('../assets/images/person6.jpg')}
          resizeMode="cover"
          style={styles.dpImg}
        />
      ),
      userName: 'user Name',
    },
  ];
  const renderDp = ({ item, index }) => {
    return (
      <View style={styles.storyGrp} key={index}>
        <Dp img={item.img} width={70} height={70} />
        <Text style={styles.storyUserName}>{item.userName}</Text>
      </View>
    );
  };
  return (
    <View style={styles.storeisContainer}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={persons}
        renderItem={renderDp}
        horizontal
        style={styles.flatListStyle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  storeisContainer: {
    // backgroundColor: 'blue',
    borderBottomWidth: 3,
    borderBottomColor: '#e5e5e5',
  },
  dpBorder: {
    width: 70,
    height: 70,
    borderRadius: 70,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'red',
    // margin: 5,
  },
  dpImg: {
    width: '100%',
    height: '100%',
  },
  storyGrp: {
    marginHorizontal: 5,
    alignItems: 'center',
    width: 90,
    // backgroundColor: 'green',
    overflow: 'hidden',
  },
  storyUserName: {
    color: 'black',
    fontSize: 14,
    margin: 0,
    padding: 0,
    fontWeight: '500',
  },
  flatListStyle: {
    // backgroundColor: 'red',
    // flex: 1,
  },
});
