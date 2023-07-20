import React, { Component } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, Text, Image } from 'react-native';
const IconSet = ({ iconGrp, iconName, iconSize, iconStyle, iconColor }) => {
  return (
    <>
      {iconGrp === 'MaterialCommunityIcons' ? (
        <MaterialCommunityIcons
          name={iconName}
          size={iconSize}
          style={iconStyle}
        />
      ) : null}
      {iconGrp === 'AntDesign' ? (
        <AntDesign
          name={iconName}
          size={iconSize}
          style={iconStyle}
          color={iconColor}
        />
      ) : null}
      {iconGrp === 'FontAwesome5' ? (
        <FontAwesome5
          name={iconName}
          size={iconSize}
          style={iconStyle}
          color={iconColor}
        />
      ) : null}
      {iconGrp === 'FontAwesome' ? (
        <FontAwesome
          name={iconName}
          size={iconSize}
          style={iconStyle}
          color={iconColor}
        />
      ) : null}
      {iconGrp === 'Feather' ? (
        <Feather
          name={iconName}
          size={iconSize}
          style={iconStyle}
          color={iconColor}
        />
      ) : null}
      {iconGrp === 'Fontisto' ? (
        <Fontisto
          name={iconName}
          size={iconSize}
          style={iconStyle}
          color={iconColor}
        />
      ) : null}
      {iconGrp === 'Entypo' ? (
        <Entypo
          name={iconName}
          size={iconSize}
          style={iconStyle}
          color={iconColor}
        />
      ) : null}
      {iconGrp === 'MaterialIcons' ? (
        <MaterialIcons
          name={iconName}
          size={iconSize}
          style={iconStyle}
          color={iconColor}
        />
      ) : null}
      {iconGrp === 'Ionicons' ? (
        <Ionicons
          name={iconName}
          size={iconSize}
          style={iconStyle}
          color={iconColor}
        />
      ) : null}
    </>
  );
};

const Icons = (props) => {
  return (
    <IconSet
      iconGrp={props.iconGrp}
      iconName={props.iconName}
      iconSize={props.iconSize}
      iconStyle={props.iconStyle}
      iconColor={props.iconColor}
    />
  );
}
export default Icons;
