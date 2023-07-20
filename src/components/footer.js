import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';
import Icons from '../reuseAbleComponents/Icons';
import Dp from './dp';
import { useNavigation } from '@react-navigation/native';

export default Footer = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.footerNav}>
      <Pressable onPress={() => navigation.navigate("HomeScreen")}>
        <Icons iconGrp={'Entypo'} iconName={'home'} iconSize={28} iconStyle={''} iconColor={'#000'} />
      </Pressable>
      <Pressable onPress={() => navigation.navigate("SearchScreen")}>
        <Icons iconGrp={'AntDesign'} iconName={'search1'} iconSize={28} iconStyle={''} iconColor={'#000'} />
      </Pressable>
      <Pressable onPress={() => navigation.navigate("ReelsScreen")}>
        <Icons iconGrp={'MaterialIcons'} iconName={'live-tv'} iconSize={28} iconStyle={''} iconColor={'#000'} />
      </Pressable>
      <Pressable onPress={() => navigation.navigate("NotificationScreen")}>
        <Icons iconGrp={'AntDesign'} iconName={'hearto'} iconSize={28} iconStyle={''} iconColor={'#000'} />
      </Pressable>
      <Dp onPress={() => navigation.navigate("ProfileScreen")} width={30} height={30} />
    </View>
  );
}

const styles = StyleSheet.create({
  footerNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    width: '100%',
    height: 60,
    position: 'absolute',
    paddingHorizontal: 20,
    bottom: 0,
  },
});
