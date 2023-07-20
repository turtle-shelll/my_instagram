import { Text, View, Image, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import React, { Component, useState } from 'react';
import Icons from '../reuseAbleComponents/Icons';

export default Header = () => {
  const [msgCount, setMsgCount] = useState(0);
  const increaseMsgNumber = () => {
    setMsgCount(msgCount + 1)
  }
  return (
    <View style={styles.HeaderContainer}>
      <Image
        resizeMode="contain"
        source={require('../assets/images/Instagram_logo.png')}
        style={styles.logoImage}
      />
      <View style={styles.headerIcons}>
        <Icons
          iconGrp={'Feather'}
          iconName={'plus-square'}
          iconSize={28}
          iconStyle={''}
          iconColor={'#000'}
        />
        <Icons
          iconGrp={'AntDesign'}
          iconName={'hearto'}
          iconSize={28}
          iconStyle={''}
          iconColor={'#000'}
        />
        <Icons
          iconGrp={'AntDesign'}
          iconName={'message1'}
          iconSize={28}
          iconStyle={''}
          iconColor={'#000'}
        />
        <Pressable
          activeOpacity={1}
          style={({ pressed }) => ([styles.msgBtn, { opacity: pressed ? 0.5 : 1 }])}
          onPress={increaseMsgNumber}>
          <Text style={styles.msgTxt}>{msgCount}</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  HeaderContainer: {
    width: '100%',
    height: 60,
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerIcons: {
    position: 'relative',
    width: '40%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    // backgroundColor: 'blue',
  },
  msgBtn: {
    position: 'absolute',
    backgroundColor: 'red',
    padding: 4,
    paddingHorizontal: 6,
    borderRadius: 10,
    top: 5,
    right: 13,
  },
  msgTxt: {
    fontSize: 10,
    fontWeight: '700',
    color: 'white',
  },
  logoImage: {
    width: 90,
    height: '100%',
    // backgroundColor: 'blue',
    paddingHorizontal: 50,
    marginLeft: 30,
  },
});
