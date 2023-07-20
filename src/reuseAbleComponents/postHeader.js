import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import React, { Component, useState } from 'react';
import Dp from '../components/dp';
import Icons from './Icons';
import PostMenu from './postMenu';

export default PostHeader = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenuBtn = () => {
    setShowMenu(!showMenu);
  };
  return (
    <View style={styles.postHeaderImg}>
      <Dp width={40} height={40} />
      <Text style={styles.userName}>PostHeader</Text>
      <TouchableOpacity onPress={handleShowMenuBtn}>
        <Icons
          iconGrp={'Entypo'}
          iconName={'dots-three-vertical'}
          iconSize={20}
        />
      </TouchableOpacity>
      {showMenu && (
        <PostMenu handleShowMenuBtn={handleShowMenuBtn} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  postHeaderImg: {
    // position: 'relative',
    flexDirection: 'row',
    padding: 8,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
  },
  userName: {
    flexGrow: 1,
    padding: 10,
    fontSize: 16,
    color: 'black',
    fontWeight: '600',
  },
});
