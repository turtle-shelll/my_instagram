import { StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';
import Icons from './Icons';
import PostFooterDescription from './postFooterDescription';

export default PostFooter = () => {
  return (
    <>
      <View style={styles.footerContainer}>
        <Icons
          iconGrp={'AntDesign'}
          iconName={'hearto'}
          iconSize={28}
          iconStyle={styles.iconStyle}
          iconColor={'#000'}
        />
        <Icons
          iconGrp={'AntDesign'}
          iconName={'message1'}
          iconSize={28}
          iconStyle={styles.iconStyle}
          iconColor={'#000'}
        />
        <Icons
          iconGrp={'Feather'}
          iconName={'send'}
          iconSize={28}
          iconStyle={styles.iconStyle}
          iconColor={'#000'}
        />
        <Icons
          iconGrp={'Feather'}
          iconName={'bookmark'}
          iconSize={28}
          iconStyle={styles.saveIcon}
          iconColor={'#000'}
        />
      </View>
      <PostFooterDescription />
    </>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: 'row',
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  iconStyle: {
    marginHorizontal: 10,
  },
  saveIcon: {
    marginLeft: 'auto',
    marginRight: 5,
  },
});
