import { StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';
import Dp from '../components/dp';

export default PostFooterDescription = () => {
  return (
    <View style={styles.footerDescription}>
      <View style={styles.dpBox}>
        <Dp width={45} height={45} />
      </View>
      <View>
        <Text style={styles.userName}>PostFooterDescription</Text>
        <Text style={styles.comment}>
          nafriqh in awenfi oiaiwhef oiqihwoid57\reg 86wefkjbiuqefhn
          awoeiehfuijnv685e4rgvjnwuifu oioiwhrgrf6
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footerDescription: {
    flexDirection: 'row',
  },
  dpBox: {
    flexShrink: 0,
    padding: 10,
    justifyContent: 'center',
  },
  userName: {
    color: 'black',
    fontSize: 16,
    fontWeight: '500',
  },
  comment: {
    width: '50%',
    flexWrap: 'wrap',
  },
});
