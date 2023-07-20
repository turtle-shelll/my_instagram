import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, { Component } from 'react';
import Icons from './Icons';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
// console.log('deviceWidth==-', deviceWidth);
// console.log('deviceHeight==-', deviceHeight);
export default PostMenu = (props) => {
  return (
    <View style={styles.postMenu}>
      <TouchableOpacity
        style={styles.crossBtn}
        onPress={props.handleShowMenuBtn}>
        <Icons
          iconGrp={'Entypo'}
          iconName={'cross'}
          iconSize={20}
        // iconStyle={{backgroundColor: 'blue'}}
        />
      </TouchableOpacity>
      <Text style={[styles.menuTxt, { color: 'red' }]}>Hide Ad</Text>
      <Text style={[styles.menuTxt, { color: 'red' }]}>Report Ad</Text>
      <Text style={styles.menuTxt}>Why you're seeing this ad</Text>
      <Text style={styles.menuTxt}>About this account</Text>
      <Text style={styles.menuTxt}>About Instagram ads</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  postMenu: {
    backgroundColor: '#f5f5f5',
    position: 'absolute',
    zIndex: 10,
    width: deviceWidth - 100,
    top: 10,
    right: 10,
    borderRadius: 10,
    paddingVertical: 20,
  },
  menuTxt: {
    fontSize: 16,
    fontWeight: '500',
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
  crossBtn: {
    position: 'absolute',
    right: 0,
    // padding: 15,
    width: '20%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
    zIndex: 10,
  },
});
