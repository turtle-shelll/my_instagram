import { Text, View, Modal, StyleSheet } from 'react-native';
import React, { Component, useState } from 'react';

export default MyModel = () => {
  const [showModel, setShowModel] = useState(true);

  return (
    <Modal visible={showModel} style={styles.modelStyles}>
      <View style={styles.modelViewStyles}>
        <Text style={{ fontSize: 20, fontWeight: '600' }}>
          Showing_Data.....
        </Text>
        <Text style={{ fontSize: 20, fontWeight: '600' }}>
          Showing_Data.....
        </Text>
        <Text style={{ fontSize: 20, fontWeight: '600' }}>
          Showing_Data.....
        </Text>
        <Text style={{ fontSize: 20, fontWeight: '600' }}>
          Showing_Data.....
        </Text>
        <Text style={{ fontSize: 20, fontWeight: '600' }}>
          Showing_Data.....
        </Text>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modelStyles: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modelViewStyles: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    width: '100%',
    height: '100%',
  },
});
